import { Box } from "@mui/material";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import "animate.css";
import {
  Button,
  HighlightTextContainer,
  Paragraph,
  PinkText,
  SubText,
  Text,
  TextContainer,
} from "../styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Card1() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        padding: { xs: 0, md: 10 },
        animation: "fadeInLeft 1s", // Adicionando a animação utilizando a classe fadeInLeft do animate.css com duração de 2 segundos
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          padding: 5,
        }}
      >
        <TextContainer>
          <Text>

          </Text>
        Tenha uma Vida mais Leve:
          <HighlightTextContainer>
            <Box sx={{fontWeight:500, fontSize: { xs: 15, md: 30 }, color: "white" }}>Acabe de vez com a retenção de líquidos e o inchaço</Box >
 
          </HighlightTextContainer>
          <br />
          <Box sx={{ fontWeight:300, fontSize: { xs: 15, md: 20 }, color: "white" }}>
          Desperte a sua melhor versão com Dexfit! Esta cápsula exclusiva,
           desenvolvida especialmente para mulheres, apresenta uma fórmula 100% natural.
          </Box>
          <br />
          <Button>EU QUERO EMAGRECER</Button>
        </TextContainer>
      </Box>

      <Box sx={{ flex: 1, width: { xs: "100%", md: "40%" } }}>
        <Image
          style={{ objectFit: "contain" }}
          layout="responsive"
          width={600}
          height={475}
          src="/IMAGEMPRODUT.png"
        />
      </Box>
    </Box>
  );
}
