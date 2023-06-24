"use client";
import { Box } from "@mui/material";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import {
  Button,
  Container,
  HighlightTextContainer,
  Paragraph,
  TextContainer,
  WhiteText,
} from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box
    sx={{
      height: '100%',
      backgroundColor: '#1e1b2c',
      color: '#ff0181',
      fontSize: 40,
      fontWeight: 700,
      display: { xs: 'column', md: 'flex' },
      alignItems: 'center',
      width: '100vw',
      paddingBottom: 500
    }}
  >
      <Box  sx={{
        width:{ xs: '100%', md: '50%' },
        padding: 5,
        backgroundColor: '#1e1b2c',
        '&:hover': {
          
        },
      }}>
      <TextContainer>
        MULHERES
        <br />
        PODEROSAS:
        <br />
        <WhiteText>descubra o segredo</WhiteText>
        <HighlightTextContainer>
          <WhiteText>para&nbsp;</WhiteText>
          emagrecer
        </HighlightTextContainer>
        <br />
        <Paragraph>
          Desperte a sua melhor versão com Dexfit! Esta cápsula exclusiva,
          desenvolvida especialmente para mulheres, apresenta uma fórmula 100%
          natural.
        </Paragraph>
        <br />
        <Button>EU QUERO EMAGRECER</Button>
      </TextContainer>
      </Box>
      <Box sx={{ flexGrow: 1}}>
      <Image
        style={{ objectFit: "contain" }}
        layout="responsive"
        width={800}
        height={675}
        src="/IMAGEM DE PRODUTO.png"
      />
      </Box>
    </Box>
  );
}
     //usar o layout responsive para imagens//
     //<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>//