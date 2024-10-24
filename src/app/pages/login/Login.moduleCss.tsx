import { Box, styled} from "@mui/material";
import Paper from "@mui/material/Paper";

//Mudar depois para um CSS
export const Background = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundImage: "url('/Loginmydoctor.jpeg')",
  backgroundSize: "cover" //ajuste da imagem na tela
});

export const ContainerForm = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
});

export const FormPaper = styled(Paper)({
  width: "100%",
  maxWidth: "300px",
  padding: "40px",
  textAlign: "center",
  borderRadius: "10px",
  //backgroundColor: 'transparent', // Div transparente
  opacity: 0.8
});

export const InputBox = styled(Box)({
  marginBottom: "13px"
});
