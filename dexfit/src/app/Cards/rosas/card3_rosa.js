import { Box } from "@mui/material";
import Image from "next/image";
import { Button, CardText, SecText, Text } from "../../styles";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Card3_rosa() {
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
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: { xs: 5, md: 10 },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          padding: 5,
          opacity: isAnimated ? 1 : 0, // Set the opacity based on isAnimated state
          transition: "opacity 0.5s ease", // Add a transition effect for opacity change
        }}
      >
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
          width: { xs: "100%", md: "60%" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            paddingBottom: 5,
          }}
        >
          <Text>Desperte para uma Nova Vida! &nbsp;</Text>

          <Text pink>Diga adeus à retenção de líquidos e ao inchaço&nbsp;</Text>
        </Box>
        <Box>
          <Box
            sx={{
              fontWeight: 300,
              fontSize: { xs: 15, md: 20 },
              color: "white",
            }}
          >
            O BRASIL SLIM – DEXFIT com sua performance premium é composto por
            cinco ativos principais de alta potência, CAFÉ VERDE, INULINA,
            VITAMINA B12, EXTRATO DE LARANJA MORO e o TRANS RESVERATROL,
            presentes na composição de forma rica e restauradora,{" "}
            <SecText>
              promovendo uma vida mais saudável, melhora a qualidade de vida,
              reduz as dores que o inchaço trás, melhora o funcionamento do
              organismo e traz alívio na hora de colocar uma roupa ou calçado
            </SecText>{" "}
            sem se sentir inchada.
          </Box>
        </Box>
        <br />
        <Button>EU QUERO DESPERTAR UMA NOVA VIDA</Button>
      </Box>
    </Box>
  );
}
