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
      ref={ref}
      sx={{
        display: "flex", //adicionar grid aqui para os cards ficarem do mesmo tamanho
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "100%" },
          padding: { xs: 0, md: 5 },
        }}
      >
        <TextContainer>
          <Text>
            Não perca os{" "}
            <Text pink>
              {" "}
              relatos impressionantes de profissionais que indicam nosso produto
            </Text>
          </Text>
        </TextContainer>
      </Box>
      <br />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          width: { xs: "100%", md: "100%" },
          padding: { xs: 0, md: 0 },
          alignItems: "stretch",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            padding: 3,
            backgroundColor: theme.colors.secondary,
            borderRadius: 2,
            margin: { xs: 0, md: 2 },
            color: "white",
            height: { xs: 450, md: 350 },
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            boxShadow: "0px 4px 15px rgba(255, 1, 128, 1)",
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
            <Title>ISABELA OLIVEIRA, NUTRICIONISTA- RJ</Title>
            <br/>
            “Sou nutricionista, e em meus atendimentos com minhas clientes que
            sofrem de muita retenção de líquido sempre indico o BRASIL SLIM –
            DEXFIT ele é um excelente diurético, realmente ele cumpre o que
            promete. Super recomendo.”
          </Box>
          <Image
            style={{ objectFit: "contain", margin: 15, alignSelf: "center" }}
            width={175}
            height={175}
            src="/Ellipse1.png"
          />
        </Box>
        <br />
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "50%" },
            flexDirection: { xs: "column", md: "row" },
            padding: 3,
            backgroundColor: theme.colors.secondary,
            borderRadius: 2,
            color: "white",
            margin: { xs: 0, md: 2 },
            height: { xs: 450, md: 350 },
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            boxShadow: "0px 4px 15px rgba(255, 1, 128, 1)",

            animation: isAnimated ? "fadeIn 2s" : "",
            animationDelay: "1s",
            transition: "opacity 0.5s ease",
          }}
        >
          <Box sx={{   display: "flex",
              flexDirection: "column",
              fontWeight: 300,
              fontSize: 12, }}>
            <Title>DRA. MARIA CLARA DIAS, BIOMÉDICA ESTETA – RJ</Title>
            <br/>
              “Eu como biomédica esteta, posso dizer que os ingredientes que
              formam o BRASIL SLIM- DEXFIT são certeiros no quesito de
              desinchar, ter ação diurética, auxilia no emagrecimento. Não há
              dúvidas quanto a eficácia do BRASIL SLIM- DEXFIT, ele é mais do
              que aprovado “.
          
          </Box>
          <Image
            style={{ objectFit: "contain", margin: 15, alignSelf: "center" }}
            width={175}
            height={175}
            src="/Ellipse2.png"
          />
        </Box>
        <br />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          width: { xs: "100%", md: "100%" },
          padding: { xs: 0, md: 0 },
          alignItems: "stretch",
          animationDelay: "0.5s",
          transition: "opacity 0.5s ease",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "50%" },
            flexDirection: { xs: "column", md: "row" },
            padding: 3,
            backgroundColor: theme.colors.secondary,
            borderRadius: 2,
            color: "white",
            margin: { xs: 0, md: 2 },
            height: { xs: 450, md: 350 },
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            boxShadow: "0px 4px 15px rgba(255, 1, 128, 1)",
            animation: isAnimated ? "fadeIn 2s" : "",
            animationDelay: "1.5s",
            transition: "opacity 0.5s ease",
          }}
        >
          <Box sx={{   display: "flex",
              flexDirection: "column",
              fontWeight: 300,
              fontSize: 12, }}>
            <Title>MONALISA ROCHA, ESTETICISTA – MG</Title>
            <br/>
              “Trabalho há bastante tempo na aérea do embelezamento corporal e
              nunca tinha visto algo tão eficaz quanto o BRASIL SLIM- DEXFIT,
              ele ajuda muito minhas clientes que fazem a drenagem a ter um
              resultado muito mais rápido se sentir mais desinchada por isso ele
              é conhecido como “drenagem em cápsulas”.
            
          </Box>
          <Image
            style={{ objectFit: "contain", margin: 15, alignSelf: "center" }}
            width={175}
            height={175}
            src="/Ellipse3.png"
          />
        </Box>
        <br />
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "50%" },
            flexDirection: { xs: "column", md: "row" },
            padding: 3,
            backgroundColor: theme.colors.secondary,
            borderRadius: 2,
            color: "white",
            margin: { xs: 0, md: 2 },
            height: { xs: 450, md: 350 },
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            boxShadow: "0px 4px 15px rgba(255, 1, 128, 1)",
            animation: isAnimated ? "fadeIn 2s" : "",
            animationDelay: "2s",
            transition: "opacity 0.5s ease",
          }}
        >
          <Box sx={{   display: "flex",
              flexDirection: "column",
              fontWeight: 300,
              fontSize: 12, }}>
            <Title>THAIS VIANA, FARMACÊUTICA ESTETA – MG</Title>
            <br/>
              “Desde a minha graduação em farmácia vi que a inúmeras vantagens e
              benefícios que a suplementação natural tem e grande potência,
              nisso o BRASIL SLIM -DEXFIT fornece o que há mais de inovador e
              eficaz que o mercado nacional já teve, estou super satisfeita com
              minhas clientes tanto na farmácia quanto na minha clínica, pois
              também trabalho na área de estética. BRASIL SLIM – DEXFIT é o nome
              certo para 2023. SEGURANÇA, TECNOLOGIA E CREDIBILIDADE É O QUE ELE
              OFERECE A VOCÊ.”
          
          </Box>
          <Image
            style={{ objectFit: "contain", margin: 15, alignSelf: "center" }}
            width={175}
            height={175}
            src="/Ellipse4.png"
          />
        </Box>
        <br />
      </Box>
    </Box>
  );
}
