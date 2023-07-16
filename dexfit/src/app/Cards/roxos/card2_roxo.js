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
  Title,
} from "../../styles";
import theme from "../../theme";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const texts = [
  "Acelere seu metabolismo de forma natural e segura",
  "Mais saciedade, menos comida",
  "Redução de medidas visível em pouco tempo",
  "Pele, cabelos e unhas mais saudáveis e jovens",
];

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Card2_roxo() {
  const [isAnimated, setIsAnimated] = useState(false);
  const { _, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }
  }, [inView]);

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
          width: { xs: "100%", md: "50%" },
          padding: 5,
        }}
      >
        <TextContainer>
          Maternidade saudável e equilibrada:
          <HighlightTextContainer>
            <Box
              sx={{
                fontWeight: 500,
                fontSize: { xs: 15, md: 30 },
                color: "white",
              }}
            >
              Descubra os benefícios do MãeSlim
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
            Acelere seu metabolismo, reduza medidas, sinta-se saciada,
            potencialize a evacuação e tenha uma aparência radiante. Uma
            maternidade saudável e em forma ao seu alcance!
          </Box>
          <br />
          <PurpleButton>EU QUERO EMAGRECER</PurpleButton>
        </TextContainer>
      </Box>

      <Box sx={{ flex: 1, width: { xs: "100%", md: "50%" } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: { xs: "100%", md: "100%" },
            padding: { xs: 0, md: 0 },
            alignItems: "stretch",
          }}
        >
          {texts.map((text, idx) => (
            <Box
              key={`${idx}-${text}`}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                padding: 7,
                backgroundColor: "rgba(140, 0, 255, 1)",
                borderRadius: 2,
                margin: { xs: 0, md: 2 },
                color: "white",
                height: { xs: 136, md: 136 },
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                animation: isAnimated ? "fadeIn 2s" : "",
                animationDelay: "0.5s",
                transition: "opacity 0.5s ease",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: 300,
                  fontSize: 12,
                }}
              >
                <Title>{text}</Title>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
