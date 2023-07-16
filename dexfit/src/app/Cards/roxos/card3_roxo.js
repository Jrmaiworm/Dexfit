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

const texts = [
  {
    title: "Sem efeitos colaterais:",
    text: "Nosso produto foi cuidadosamente formulado para garantir que você possa desfrutar de seus benefícios sem preocupações.",
  },
  {
    title: "Promove a saciedade:",
    text: "Com nossa fórmula especial, você sentirá mais satisfação após as refeições.",
  },
  {
    title: "Redução nos números do manequim:",
    text: "Com o uso regular, você notará uma diminuição gradual nos tamanhos de roupas, alcançando o corpo que deseja.",
  },
  {
    title: "Autoestima recuperada:",
    text: "Sinta-se confiante e empoderada novamente, reconectando-se com sua feminilidade e se sentindo bem consigo mesma.",
  },
];

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
          src="/mae-e-filha-praticando-ioga-em-casa 1.png"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
        }}
      >
        <TextContainer>
          TRANSFORME SUA VIDA:
          <HighlightTextContainer>
            <Box
              sx={{
                fontWeight: 500,
                fontSize: { xs: 15, md: 30 },
                color: "white",
              }}
            >
              Recupere sua autoestima e redescubra a mulher incrível que existe
              em você
            </Box>
          </HighlightTextContainer>
        </TextContainer>
        <br />

        {texts.map((text, idx) => (
          <Box
            key={`${idx}-${text.text}`}
            sx={{
              fontWeight: 700,
              fontSize: { xs: 15, md: 20 },
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            <TextContainer
              style={{
                fontWeight: 700,
                display: "flex",
                flexDirection: "row",
                display: "inline-block",
                color: "rgba(156, 74, 236, 1)",
              }}
            >
              {text.title}&nbsp;
              <Text style={{ fontSize: 20, fontWeight: 400 }}>{text.text}</Text>
            </TextContainer>
          </Box>
        ))}
        <PurpleButton>Eu quero emagrecer!</PurpleButton>
      </Box>
    </Box>
  );
}
