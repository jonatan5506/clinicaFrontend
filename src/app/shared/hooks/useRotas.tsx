//Garante a rota privada entre Dashboard e tela de login
import { parseCookies } from "nookies";
import React, { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface telaUsuarioProps {
  element: ReactElement;
}

export const TelaUsuarioNaoLogado: React.FC<telaUsuarioProps> = ({
  element
}) => {
  const cookies = parseCookies();
  const token = cookies["@clinica.token"];
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return !token ? element : null; // Retorna `element` se o token não existir
};

export const TelaUsuarioLogado: React.FC<telaUsuarioProps> = ({ element }) => {
  const cookies = parseCookies();
  const token = cookies["@clinica.token"];
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return token ? element : null;
};
