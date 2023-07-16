import { Box } from "@mui/material";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import "animate.css";
import {
  Button,
  HighlightTextContainer,
  Paragraph,
  PinkText,
  PurpleButton,
  SubText,
  Text,
  TextContainer,
} from "../../styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Card1_roxo() {
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
          Volte ao seu peso antes da gravidez
          <HighlightTextContainer>
            <Box
              sx={{
                fontWeight: 500,
                fontSize: { xs: 15, md: 30 },
                color: "white",
              }}
            >
              com apenas duas cápsulas por dia!
            </Box>
          </HighlightTextContainer>
          <br />
          <Box
            sx={{
              fontWeight: 300,
              fontSize: { xs: 15, md: 20 },
              color: "white",
            }}
          >
            Mãe Slim: A solução natural e Segura para voltar ao peso de antes da
            gravidez rapidamente, sem efeitos colaterais!
          </Box>
          <br />
          <PurpleButton>EU QUERO EMAGRECER</PurpleButton>
        </TextContainer>
      </Box>

      <Box sx={{ flex: 1, width: { xs: "100%", md: "40%" } }}>
        <Image
          style={{ objectFit: "contain" }}
          layout="responsive"
          width={600}
          height={475}
          src="/MaeSlim.png"
        />
      </Box>
    </Box>
  );
}
