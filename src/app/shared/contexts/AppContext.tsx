import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api/api";
import { destroyCookie, setCookie } from "nookies";

// Tipo do usuário que retorna do backend
type Usuario = {
    usuarioNome: string;
    usuarioLogin: string;
    usuarioTipoId: number;
    token: string;
};

// Tipo da resposta da API
type LoginResponse = {
    usuario: Usuario;
};

type AppContextData = {
    usuario: Usuario | undefined;
    logado: boolean;
    logar: (usuario: string, senha: string) => Promise<string | null>;
    deslogar: () => void;
};

type AppProviderProps = {
    children: ReactNode;
};

export const AppContext = createContext({} as AppContextData);

export const AppProvider = ({ children }: AppProviderProps) => {
    const [usuario, setUsuario] = useState<Usuario>();
    const logado = Boolean(usuario);

    const logar = async (usuario: string, senha: string) => {
        try {
            const response = await api.post<LoginResponse>('/usuarios/login', {
                usuario: usuario,
                senha: senha,
            });

            console.log('Response:', response);
            setUsuario(response.data.usuario);

            setCookie(null, '@clinica.token', response.data.usuario.token, {
                maxAge: 30 * 24 * 60 * 60,
            });

            api.defaults.headers.common['Authorization'] = 'Bearer '+ response.data.usuario.token

            window.location.href = '/';
        } catch (error:any) {
            //console.error("Erro ao fazer login:", error);
            return error.response.data.message;
        }
        return null;
    };

    const deslogar = () => {
        try {
            destroyCookie(null, '@clinica.token');
            window.location.href = "/login";
        } catch (error) {
            console.log("Erro ao deslogar!");
            
        }
    };

    return (
        <AppContext.Provider value={{ usuario, logado, logar, deslogar }}>
            {children}
        </AppContext.Provider>
    );
};
