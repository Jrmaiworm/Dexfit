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
} from "../styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Card1() {
  return (
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
          <Box sx={{ fontSize: { xs: 20, md: 30 }, color: "white" }}>
            Desperte a sua melhor versão com Dexfit! Esta cápsula exclusiva,
            desenvolvida especialmente para mulheres, apresenta uma fórmula 100%
            natural.
          </Box>
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
          src="/IMAGEMPRODUTO.png"
        />
      </Box>
    </Box>
  );
};
