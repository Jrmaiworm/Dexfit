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
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#1e1b2c",
        color: "#ff0181",
        fontSize: 40,
        fontWeight: 700,
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          width: "100%",
          padding: { xs: 5, md: 0 },
        }}
      >
        <Box
          sx={{
            flex: 1,
            width: { xs: "100%", md: "50%" },
            padding: 5,
          }}
        >
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
              desenvolvida especialmente para mulheres, apresenta uma fórmula
              100% natural.
            </Paragraph>
            <br />
            <Button>EU QUERO EMAGRECER</Button>
          </TextContainer>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Image
            style={{ objectFit: "contain" }}
            layout="responsive"
            width={800}
            height={675}
            src="/IMAGEM DE PRODUTO.png"
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "rgba(108, 93, 158, 0.19)",
          padding: 5,
          textAlign: "center",
          minWidth: 1240,
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            width: 258,
            fontWeight: 900,
            fontSize: 24,
          }}
        >
          <Image
            style={{ objectFit: "contain" }}
            layout="responsive"
            width={197}
            height={156}
            src="/CALORIA.png"
          />
          Potencialize seu metabolismo
          <Paragraph style={{ fontWeight: 400, fontSize: 20 }}>
            <br />
            Queime gordura de forma rápida e natural através do aumento do seu
            metabolismo. Experimente agora o poder de Dexfit
          </Paragraph>
        </Box>

        <Box
          sx={{
            width: 258,
            fontWeight: 900,
            fontSize: 24,
          }}
        >
          <Image
            style={{ objectFit: "contain" }}
            layout="responsive"
            width={197}
            height={156}
            src="/MEDIDAS.png"
          />
          Reduza medidas em tempo recorde!
          <Paragraph style={{ fontWeight: 400, fontSize: 20 }}>
            <br />
            Veja resultados visíveis em pouco tempo e diga adeus às roupas plus
            size.
          </Paragraph>
        </Box>

        <Box
          sx={{
            width: 258,
            fontWeight: 900,
            fontSize: 24,
          }}
        >
          <Image
            style={{ objectFit: "contain" }}
            layout="responsive"
            width={197}
            height={156}
            src="/BELEZA.png"
          />
          Desperte a beleza interior
          <Paragraph style={{ fontWeight: 400, fontSize: 20 }}>
            <br />
            Tenha uma pele firme, radiante e saudável, cabelos deslumbrantes e
            unhas impecáveis.
          </Paragraph>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: { xs: 5, md: 0 },
        }}
      >
        <Box>
          <Image
            style={{ objectFit: "contain" }}
            layout="responsive"
            width={525}
            height={579}
            src="/FOTO 1.png"
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            padding: 5,
          }}
        >
          <TextContainer style={{ display: "flex", flexDirection: "row" }}>
            <WhiteText>Sinta-se uma&nbsp;</WhiteText>
            <HighlightTextContainer>MULHER</HighlightTextContainer>
          </TextContainer>
          <TextContainer style={{ display: "flex", flexDirection: "row" }}>
            <HighlightTextContainer>COMPLETA&nbsp;</HighlightTextContainer>
            <WhiteText>novamente!</WhiteText>
          </TextContainer>
          <br />
          <Box
            sx={{
              fontWeight: 700,
              fontSize: 20,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(239, 54, 147, 1)",
                height: 16,
                width: 16,
                borderRadius: 100,
                marginRight: 10,
              }}
            />

            <WhiteText
              style={{
                fontWeight: 400,
                fontSize: 20,
                display: "flex",
                flexDirection: "row",

                display: "inline-block",
              }}
            >
              Transforme seu corpo&nbsp;
              <div style={{ fontWeight: 700 }}>sem efeitos colaterais</div>
            </WhiteText>
          </Box>

          <Box
            sx={{
              fontWeight: 700,
              fontSize: 20,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(239, 54, 147, 1)",
                height: 16,
                width: 16,
                borderRadius: 100,
                marginRight: 10,
              }}
            />

            <WhiteText
              style={{
                fontWeight: 400,
                fontSize: 20,
                display: "flex",
                flexDirection: "row",

                display: "inline-block",
              }}
            >
              Recupere sua&nbsp;
              <div style={{ fontWeight: 700 }}>autoestima&nbsp;</div>e brilhe
              como nunca
            </WhiteText>
          </Box>

          <Box
            sx={{
              fontWeight: 700,
              fontSize: 20,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(239, 54, 147, 1)",
                height: 16,
                width: 16,
                borderRadius: 100,
                marginRight: 10,
              }}
            />

            <WhiteText
              style={{
                fontWeight: 400,
                fontSize: 20,
                display: "flex",
                flexDirection: "row",

                display: "inline-block",
              }}
            >
              Prepare-se para&nbsp;
              <div style={{ fontWeight: 700 }}>
                reduzir os números do manequim&nbsp;
              </div>
              e arrasar com sua nova silhueta
            </WhiteText>
          </Box>

          <Box
            sx={{
              fontWeight: 700,
              fontSize: 20,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(239, 54, 147, 1)",
                height: 16,
                width: 16,
                borderRadius: 100,
                marginRight: 10,
              }}
            />

            <WhiteText
              style={{
                fontWeight: 400,
                fontSize: 20,
                display: "flex",
                flexDirection: "row",

                display: "inline-block",
              }}
            >
              Desfrute da&nbsp;
              <div style={{ fontWeight: 700 }}>sensação de saciedade&nbsp;</div>
              duradoura e conquiste o controle sobre a sua alimentação
            </WhiteText>
          </Box>

          <Box
            sx={{
              fontWeight: 700,
              fontSize: 20,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(239, 54, 147, 1)",
                height: 16,
                width: 16,
                borderRadius: 100,
                marginRight: 10,
              }}
            />

            <WhiteText
              style={{
                fontWeight: 400,
                fontSize: 20,
                display: "flex",
                flexDirection: "row",

                display: "inline-block",
              }}
            >
              <div style={{ fontWeight: 700 }}>100% NATURAL</div>
            </WhiteText>
          </Box>

          <Button>EU QUERO SER UMA MULHER COMPLETA</Button>
        </Box>
      </Box>
    </Box>
  );
}
