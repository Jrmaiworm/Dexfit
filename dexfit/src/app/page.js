"use client";

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
    <Container className={montserrat.className}>
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

      <Image
        style={{ objectFit: "contain" }}
        width={1200}
        height={675}
        src="/IMAGEM DE PRODUTO.png"
      />
    </Container>
  );
}
