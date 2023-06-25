"use client";
import { Box } from "@mui/material";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import {
  Button,
  HighlightTextContainer,
  Paragraph,
  PinkText,
  Text,
  TextContainer,
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
          // boxShadow: '0 6px 80px -18px rgba(220,220,220, 0.81)',
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          width: "100%",
          padding: { xs: 5, md: 10 },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            padding: 5,
          }}
        >
          <TextContainer>
            MULHERES
            <br />
            PODEROSAS:
            <br />
            <Text>descubra o segredo</Text>
            <HighlightTextContainer>
              <Text>para&nbsp;</Text>
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
          width: "90%",
          borderRadius: 3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "rgba(108, 93, 158, 0.19)",
          alignItems: "center",
          padding: 5,
          textAlign: "center",
          justifyContent: { xs: "center", md: "space-around" },
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "20%" },
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
          <PinkText>Potencialize seu metabolismo</PinkText>

          <Paragraph style={{ fontWeight: 400, fontSize: 20 }}>
            <br />
            Queime gordura de forma rápida e natural através do aumento do seu
            metabolismo. Experimente agora o poder de Dexfit
          </Paragraph>
        </Box>

        <Box
          sx={{
            width: { xs: "90%", md: "20%" },
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
          <PinkText>
          Reduza medidas em tempo recorde!
          </PinkText>
          <Paragraph style={{ fontWeight: 400, fontSize: 20 }}>
            <br />
            Veja resultados visíveis em pouco tempo e diga adeus às roupas plus
            size.
          </Paragraph>
        </Box>

        <Box
          sx={{
            width: { xs: "90%", md: "20%" },
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
          <PinkText>
          Desperte a beleza interior
          </PinkText>
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
          <Box
            sx={{
              width: "100%",
              padding: 5,
            }}
          >
            <Text>
              Sinta-se uma&nbsp; <Text pink>MULHER</Text>
            </Text>
            <Text pink>
              COMPLETA&nbsp; <Text>novamente!</Text>
            </Text>
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

            <Text
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
            </Text>
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

            <Text
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
            </Text>
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

            <Text
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
            </Text>
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

            <Text
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
            </Text>
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

            <Text
              style={{
                fontWeight: 400,
                fontSize: 20,
                display: "flex",
                flexDirection: "row",

                display: "inline-block",
              }}
            >
              <div style={{ fontWeight: 700 }}>100% NATURAL</div>
            </Text>
          </Box>

          <Button>EU QUERO SER UMA MULHER COMPLETA</Button>
        </Box>
      </Box>
    </Box>
  );
}
