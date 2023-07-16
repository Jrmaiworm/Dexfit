import { Box } from "@mui/material";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
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
} from "../../styles";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import theme from "../../theme";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Card5_rosa() {
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
      ref={ref}
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
          padding: 6,
        }}
      >
        <Text>
          Chegou o <Text pink>momento de você retomar o controle,</Text>
          <Text> recuperar o corpo e elevar sua autoestima ao máximo!</Text>
        </Text>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "white",
            margin: 2,
            borderRadius: 2,
            padding: { xs: 5, md: 5 },
            // animation: isAnimated ? "fadeInUp 1s" : "",
            // animationDelay: "0.5s",
          }}
        >
          <BlackText style={{ fontWeight: "700", fontSize: 24 }}>
            Kit 5 unidades
          </BlackText>
          <Image
            style={{ objectFit: "contain" }}
            width={220}
            height={220}
            src="/5unidades.png"
          />
          <BlackSubText style={{ fontSize: 16, fontWeight: "700" }}>
            De R$ 798,00 por apenas:
          </BlackSubText>
          <BlackSubText
            style={{ fontSize: 40, fontWeight: "900", alignItems: "center" }}
          >
            <span style={{ fontSize: 16 }}>12X</span>
            &nbsp;R$ 39,70
          </BlackSubText>
          <PinkSubText style={{ fontSize: 16, fontWeight: "700" }}>
            ou R$ 397,00 à vista
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
              animation: isAnimated ? "fadeInUp 1s" : "",
              animationDelay: "1s",
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
              padding: { xs: 0, md: 5 },
              boxShadow: "0px 4px 15px  rgba(255, 1, 129, 1)",
              animation: isAnimated ? "fadeIn 1s" : "",
            }}
          >
            <CardText style={{ fontWeight: "700", fontSize: 24 }}>
              Kit 3 unidades
            </CardText>

            <Image
              style={{ objectFit: "contain" }}
              width={320}
              height={300}
              src="/3unidades.png"
            />
            <WhiteSubText style={{ fontSize: 16, fontWeight: "700" }}>
              De R$ 594,00 por apenas:
            </WhiteSubText>
            <WhiteSubText
              style={{ fontSize: 40, fontWeight: "900", alignItems: "center" }}
            >
              <span style={{ fontSize: 16 }}>12X</span>&nbsp;R$ 29,70
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
            margin: 2,
            borderRadius: 2,
            padding: { xs: 5, md: 5 },
            // animation: isAnimated ? "fadeInUp  1s" : "",
            // animationDelay: "1.5s",
          }}
        >
          <BlackText style={{ fontWeight: "700", fontSize: 24 }}>
            1 unidade
          </BlackText>
          <Image
            style={{ objectFit: "contain" }}
            width={220}
            height={220}
            src="/1unidade.png"
          />
          {/* //trocar a foto 1 unidade */}
          <BlackSubText style={{ fontSize: 16, fontWeight: "700" }}>
            De R$ 297,00 por apenas:
          </BlackSubText>
          <BlackSubText
            style={{ fontSize: 40, fontWeight: "900", alignItems: "center" }}
          >
            <spam style={{ fontSize: 16 }}>12X</spam>&nbsp;R$ 19,70
          </BlackSubText>
          <PinkSubText style={{ fontSize: 16, fontWeight: "700" }}>
            ou R$ 197,00 à vista
          </PinkSubText>
          <br />
          <Button>Eu Quero</Button>
        </Box>
      </Box>
      <Box sx={{ flex: 1, width: { xs: "100%", md: "30%" } }}></Box>
    </Box>
  );
}
