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
          src="/image 10.png"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
        }}
      >
        <TextContainer>
          <HighlightTextContainer>
            <Box
              sx={{
                fontWeight: 500,
                fontSize: { xs: 15, md: 30 },
                color: "white",
              }}
            >
              MãeSlim:
            </Box>
          </HighlightTextContainer>
          Aprovado pela ANVISA
          <HighlightTextContainer>
            <Box
              sx={{
                fontWeight: 500,
                fontSize: { xs: 15, md: 30 },
                color: "white",
              }}
            >
              para um emagrecimento de forma segura!
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
          Confie no emagrecedor especial para mães, com compostos seguros
          aprovados pela ANVISA. Reduza suas medidas pós-gravidez sem riscos!
        </Box>

        <br />

        <PurpleButton>Eu quero garantir o meu!</PurpleButton>

        <br />

        <img src="/image 11.png" />
      </Box>
    </Box>
  );
}
