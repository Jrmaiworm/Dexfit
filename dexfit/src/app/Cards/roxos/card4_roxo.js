import { Box } from "@mui/material";
import { Montserrat } from "next/font/google";
import theme from "../../theme";
import Image from "next/image";
import "animate.css/animate.min.css";
import {
  Button,
  HighlightTextContainer,
  Paragraph,
  PinkText,
  Text,
  TextCard,
  TextContainer,
  Title,
} from "../../styles";
import "animate.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const text = [
  {
    img: "/Ellipse 26.png",
    title: "Brasil Slim",
    ig: "@brasil.slim",
    linkIg: "https://www.instagram.com/brasil.slim/",
    text: "“Utilizamos na nossa rede com nossos clientes o Mãe Slim e desde que começamos a utilizar os resultados no emagrecimento melhoraram muito. Somos gratos por ter conhecido um produto tão incrível. Hoje dentro das clínicas Brasil Slim não sai um cliente sem levar o emagrecedor queridinho das mulheres do Brasil”",
    cardColor: "white",
    fontColor: "black",
  },
  {
    img: "/Ellipse 27.png",
    title: "Brasil Slim",
    ig: "@brasil.slim",
    linkIg: "https://www.instagram.com/brasil.slim/",
    text: "“Sou nutricionista e como toda profissional consciente, prezo muito pela qualidade e simplicidade quando se trata de alimentação: “O básico que funciona!”. Por isso, sempre que posso indico alguns produtos para meus clientes que eu mesma faça uso, por exemplo o MaeSlim! Vejo muitas mulheres que não conseguem emagrecer, ainda mais depois dos filhos, e sofrem recorrendo à estratégias que não servem de nada. O suplemento MaeSlim traz uma fórmula super simples e potente, com nutrientes essenciais que ajudam a preservação da saúde intestinal, auxiliam na maior saciedade, vitamina C que é anti-inflamatória e necessária para nossa imunidade estar em dia, sem contar o benefício em prevenção à flacidez. Resumindo, é tudo que eu sempre quis em um produto e de forma tão rápida”",
    cardColor: "rgba(156, 74, 236, 1)",
    fontColor: "white",
  },
  {
    img: "/Ellipse 28.png",
    title: "Clínica EmagreSee",
    ig: "@dramariaclaradias",
    linkIg: "https://www.instagram.com/emagresee.vicosa/",
    text: "“Na nossa clínica tínhamos grande dificuldade em gerar resultados em mamães pela grande dificuldade de emagrecer que elas tem. Depois do uso do Mãe Slim tudo mudou, hoje somos referência no emagrecimento saudável em Viçosa-MG e devemos muito ao Mãe Slim. Vamos sempre indiciar porque a satisfação com o Mãe Slim dentro da clínica é de 100% de nossas clientes”",
    cardColor: "white",
    fontColor: "black",
  },
];

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Card4_rosa() {
  const [isAnimated, setIsAnimated] = useState(false);
  const { ref, inView } = useInView({
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
        width: "100%",
        padding: { xs: 5, md: 10 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextContainer>
        O MãeSlim:{" "}
        <Text>
          A escolha das clínicas renomadas e dos profissionais de saúde.
        </Text>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          {text.map((text, idx) => (
            <Box
              key={`${idx}-${text.title}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: `${text.cardColor}`,
                padding: 5,
                width: `${100 / 3 - 1}%`,
                height: "fit-content",
              }}
            >
              <img
                style={{ marginBottom: 8 }}
                height={82}
                width={82}
                src={text.img}
              />

              <div
                style={{
                  color: `${text.fontColor}`,
                  fontSize: 32,
                  fontWeight: "600",
                }}
              >
                {text.title}
              </div>

              <a
                href={text.linkIg}
                target="_blank"
                style={{
                  color: `${text.fontColor}`,
                  fontSize: 18,
                  fontWeight: "400",
                  cursor: "pointer",
                  marginBottom: 26,
                }}
              >
                {text.ig}
              </a>

              <div
                style={{
                  color: `${text.fontColor}`,
                  fontSize: 18,
                  fontWeight: "400",
                }}
              >
                {text.text}
              </div>
            </Box>
          ))}
        </Box>
      </TextContainer>
    </Box>
  );
}
