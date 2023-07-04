import { Box } from "@mui/material";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import {
  BlackSubText,
  BlackText,
  Button,
  CardText,
  HighlightTextContainer,
  Paragraph,
  PinkSubText,
  PinkText,
  Text,
  TextContainer,
  Title,
  WhiteSubText,
} from "../styles";
import theme from "../theme";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Card6() {
  return (
    <Box
      sx={{
        // boxShadow: '0 6px 80px -18px rgba(220,220,220, 0.81)',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: { xs: 1, md: 5 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: 5,
        }}
      >
        <Text>
          Chegou o <Text pink>de você retomar o controle,</Text>
          <Text> recuperar o corpo e elevar sua autoestima ao máximo!</Text>
        </Text>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "white",
            margin: 3,
            borderRadius: 2,
            padding: { xs: 5, md: 10 },
          }}
        >
          <BlackText style={{ fontWeight: "700", fontSize: 24 }}>
            Kit 5 unidades
          </BlackText>
          <Image
            style={{ objectFit: "contain" }}
            layout="responsive"
            width={600}
            height={475}
            src="/3unidades.png"
          />
          <BlackSubText style={{ fontSize: 16, fontWeight: "700" }}>
            De R$ 687,00 por apenas:
          </BlackSubText>
          <BlackSubText
            style={{ fontSize: 40, fontWeight: "900", alignItems: "center" }}
          >
            <span style={{ fontSize: 16 }}>12X</span>
            &nbsp;R$ 29,82
          </BlackSubText>
          <PinkSubText style={{ fontSize: 16, fontWeight: "700" }}>
            ou R$ 297,00 à vista
          </PinkSubText>
          <br />
          <Button>Eu Quero</Button>
        </Box>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: 20,
              backgroundColor: "white",
              borderRadius: 2,
              padding: 5,
            }}
          >
            MAIS POPULAR
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: theme.colors.secondary,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              padding: { xs: 5, md: 10 },
              boxShadow: "0px 4px 15px  rgba(255, 1, 129, 1)",
            }}
          >
            <CardText>Kit 3 unidades</CardText>
            <Image
              style={{ objectFit: "contain" }}
              layout="responsive"
              width={600}
              height={475}
              src="/3unidades.png"
            />
            <WhiteSubText style={{ fontSize: 16, fontWeight: "700" }}>
              De R$ 687,00 por apenas:
            </WhiteSubText>
            <WhiteSubText
              style={{ fontSize: 40, fontWeight: "900", alignItems: "center" }}
            >
              <span style={{ fontSize: 16 }}>12X</span>&nbsp;R$ 29,82
            </WhiteSubText>
            <WhiteSubText style={{ fontSize: 16, fontWeight: "700" }}>
              ou R$ 297,00 à vista
            </WhiteSubText>
            <br />
            <Button white>Eu Quero</Button>
          </Box>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "white",
            margin: 3,
            borderRadius: 2,
            padding: { xs: 5, md: 10 },
          }}
        >
          <BlackText>Kit 1 unidade</BlackText>
          <Image
            style={{ objectFit: "contain" }}
            layout="responsive"
            width={600}
            height={475}
            src="/3unidades.png"
          />
          {/* //trocar a foto 1 unidade */}
          <BlackSubText style={{ fontSize: 16, fontWeight: "700" }}>
            De R$ 687,00 por apenas:
          </BlackSubText>
          <BlackSubText
            style={{ fontSize: 40, fontWeight: "900", alignItems: "center" }}
          >
            <spam style={{ fontSize: 16 }}>12X</spam>&nbsp;R$ 29,82
          </BlackSubText>
          <PinkSubText style={{ fontSize: 16, fontWeight: "700" }}>
            ou R$ 297,00 à vista
          </PinkSubText>
          <br />
          <Button>Eu Quero</Button>
        </Box>
      </Box>
      <Box sx={{ flex: 1, width: { xs: "100%", md: "30%" } }}></Box>
    </Box>
  );
}
