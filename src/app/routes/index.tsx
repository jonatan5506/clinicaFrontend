import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Login, Agendamento, Cadastro, Faturamento, Pep, Relatorios, Configuracao } from "../pages";
import { TelaUsuarioLogado, TelaUsuarioNaoLogado } from "../shared/hooks/useRotas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TelaUsuarioLogado element={<Dashboard></Dashboard>}></TelaUsuarioLogado>,
    children: [
      {
        path: "/agendamento",
        element: <TelaUsuarioLogado element={<Agendamento></Agendamento>}></TelaUsuarioLogado>
      },
      {
        path: "/cadastro",
        element: <TelaUsuarioLogado element={<Cadastro></Cadastro>}></TelaUsuarioLogado>
      },
      {
        path: "/faturamento",
        element: <TelaUsuarioLogado element={<Faturamento></Faturamento>}></TelaUsuarioLogado>
      },
      {
        path: "/pep",
        element: <TelaUsuarioLogado element={<Pep></Pep>}></TelaUsuarioLogado>
      },
      {
        path: "/relatorios",
        element: <TelaUsuarioLogado element={<Relatorios></Relatorios>}></TelaUsuarioLogado>
      },
      {
        path: "/configuracao",
        element: <TelaUsuarioLogado element={<Configuracao></Configuracao>}></TelaUsuarioLogado>
      }
    ]
  },
  {
    path: "/login",
    element: <TelaUsuarioNaoLogado element={<Login></Login>}></TelaUsuarioNaoLogado>
  }
]);

export default router;
