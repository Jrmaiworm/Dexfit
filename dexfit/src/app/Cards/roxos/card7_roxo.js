import { Box } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  HighlightTextContainer,
  PurpleButton,
  Text,
  TextContainer,
} from "../../styles";

export default function Card3_roxo() {
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
          src="/Rectangle 35.png"
        />
        <TextContainer
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          Dra. Thamara Sobrinho
          <HighlightTextContainer>
            <Box
              sx={{
                fontWeight: 500,
                fontSize: { xs: 15, md: 30 },
                color: "white",
                flex: 1,
              }}
            >
              Farmacêutica Esteta
            </Box>
          </HighlightTextContainer>
        </TextContainer>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
        }}
      >
        <TextContainer>
          Altamente recomendado
          <HighlightTextContainer>
            <Box
              sx={{
                fontWeight: 500,
                fontSize: { xs: 15, md: 30 },
                color: "white",
              }}
            >
              pelos mais renomados especialistas
            </Box>
          </HighlightTextContainer>
        </TextContainer>
        <br />

        <Box
          sx={{
            fontWeight: 300,
            fontSize: { xs: 15, md: 20 },
            color: "white",
          }}
        >
          Especialistas renomados de todo o Brasil estão unânimes em recomendar
          o MãeSlim como a solução perfeita para mães que desejam se livrar da
          gordura localizada, fortalecer a pele e alcançar a perda de peso de
          forma natural e eficaz. Este produto encapsulado, cuidadosamente
          desenvolvido, tem se mostrado uma opção confiável e com resultados
          comprovados.
        </Box>

        <br />

        <PurpleButton>Eu quero emagrecer!</PurpleButton>
      </Box>
    </Box>
  );
}
