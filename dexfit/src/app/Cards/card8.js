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
  TextCard,
  TextContainer,
  Title,
  WhiteSubText,
  WhiteText,
} from "../styles";
import theme from "../theme";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Card8() {
  return (
    <Box
      sx={{
        // boxShadow: '0 6px 80px -18px rgba(220,220,220, 0.81)',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: { xs: 5, md: 10 },
        backgroundImage: 'url("/RETANGULO2.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: 5,
        }}
      >
        <Text>
          O que as <Text pink> grandes marcas</Text>
          <Text> dizem sobre os componentes!</Text>
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
            borderRadius: 2,
            padding: { xs: 5, md: 5 },
          }}
        >
          <Image
            style={{ objectFit: "contain", marginBottom: 20 }}
            layout="responsive"
            width={600}
            height={475}
            src="/capricho.png"
          />
          <TextCard>
            "...os principais benefícios do uso do agente o clareamento de
            manchas, uniformização do tom de pele por ter uma ação inibidora da
            melanina e iluminação do rosto. Além disso, o ingrediente é potente
            para peles mais maduras para a redução de rugas e linhas de
            expressão, justamente por estimular a produção de colágeno."
          </TextCard>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: 2,
            padding: { xs: 5, md: 5 },
          }}
        >
          <Image
            style={{ objectFit: "contain", marginBottom: 20 }}
            layout="responsive"
            width={600}
            height={475}
            src="/livre.png"
          />
          <TextCard>
            "(A Quitosana) é natural e tem se tornado referência para uma série
            de benefícios para um rápido emagrecimento e perda de gorduras, já
            que ela pode causar maior saciedade após as refeições e reduzir a
            absorção de gorduras."
          </TextCard>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: 2,
            padding: { xs: 5, md: 5 },
          }}
        >
          <Image
            style={{ objectFit: "contain", marginBottom: 20 }}
            layout="responsive"
            width={600}
            height={475}
            src="/metropoles.png"
          />
          <TextCard>
            A spirulina é um tipo de alga utilizada como suplemento natural, é
            fonte de vitaminas, minerais, antioxidantes e é, inclusive,
            considerada um superalimento, proporcionando diversos benefícios à
            saúde. Além de todos esses benefícios, contar com o auxílio dela na
            dieta para perder aquela gordurinha é, de fato, certeiro."
          </TextCard>
        </Box>
      </Box>
      <Box sx={{ flex: 1, width: { xs: "100%", md: "30%" } }}></Box>
    </Box>
  );
}
