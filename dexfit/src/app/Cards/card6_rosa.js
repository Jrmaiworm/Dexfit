import { Box } from "@mui/material";
import Image from "next/image";
import { Button, PText, Text, TextCard } from "../styles";
import "animate.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
// card7 para o site rosa
export default function Card6_rosa() {
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

  const ListCard = () => {
    const options = [
      {
        title: "CAFÉ VERDE",
        subTitle:
          "O café verde também tem ação diurética, combatendo a retenção de líquidos e inchaço corporal.",
      },
      {
        title: "TRANS RESVERATROL",
        subTitle:
          "Auxilia na prevenção do envelhecimento, auxiliando a elasticidade e firmeza da pele, preserva a juventude da pele e combate os radicais livres.",
      },
      {
        title: "VITAMINA B12",
        subTitle: "Combate a retenção de líquidos e o inchaço.",
      },
      {
        title: "INULINA",
        subTitle:
          "Quando fermentadas pelas bactérias no intestino contribui para a absorção de cálcio, magnésio e ferro. Além de contribuírem para a saúde intestinal.",
      },
      {
        title: "EXTRATO DE LARANJA MORO",
        subTitle:
          "Laranja Moro ajuda no processo de lipólise no organismo, o que promove a redução de líquidos, e sensação de inchaço.",
      },
    ];

    return (
      <>
        {options.map((option, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              marginBottom: 2,
              animation: isAnimated ? "shakeX 1s" : "",
              animationDelay: `${0.5 + 0.2 * index}s`,
            }}
          >
            {/* <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 3,
                justifyContent: "center",
                width: 100,
                height: 100,
                borderRadius: "50%",
                backgroundColor: "white",
              }}
            >
              <Image
                style={{ objectFit: "contain" }}
                width={100}
                height={100}
                src={option.image}
              />
            </Box> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 1,
              }}
            >
              <PText>{option.title}</PText>
              <TextCard>{option.subTitle}</TextCard>
            </Box>
          </Box>
        ))}
        <br />
      </>
    );
  };

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        width: "100%",
        padding: { xs: 5, md: 5 },
      }}
      className={isAnimated ? "animated shakeX" : ""}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          padding: { xs: 0, md: 10 },
          justifyContent: "center",
        }}
      >
        <Image
          style={{ objectFit: "contain", marginBottom: 80 }}
          layout="responsive"
          width={100}
          height={100}
          src="/3unidades.png"
        />
        <Button>EU QUERO EMAGRECER</Button>
        <br />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          paddingBottom: 15,
        }}
      >
        <Box
          sx={{
            width: "100%",
            paddingBottom: 5,
            alignItems: "center",
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          <Text>Nossa composição</Text>
        </Box>
        <Box>
          <ListCard />
        </Box>
      </Box>
    </Box>
  );
}
