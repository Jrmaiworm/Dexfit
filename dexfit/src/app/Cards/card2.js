import { Box } from "@mui/material";
import Image from "next/image";
import { Paragraph, PinkText } from "../styles";
import "animate.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Card2() {
  const [isAnimated1, setIsAnimated1] = useState(false);
  const [isAnimated2, setIsAnimated2] = useState(false);
  const [isAnimated3, setIsAnimated3] = useState(false);

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      setIsAnimated1(true);
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      setIsAnimated2(true);
    }
  }, [inView2]);

  useEffect(() => {
    if (inView3) {
      setIsAnimated3(true);
    }
  }, [inView3]);

  return (
    <Box
      sx={{
        width: "90%",
        borderRadius: 3,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "rgba(108, 93, 158, 0.19)",
        alignItems: "center",
        padding: { xs: 0, md: 5 },
        textAlign: "center",
        justifyContent: { xs: "center", md: "space-around" },
      }}
    >
      <Box
        ref={ref1}
        sx={{
          width: { xs: "50%", md: "20%" },
          fontWeight: 900,
          fontSize: { xs: 18, md: 24 },
          margin: 5,
          animation: isAnimated1 ? "fadeInRight 1s" : "",
          opacity: isAnimated1 ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <Image
          style={{ objectFit: "contain" }}
          layout="responsive"
          width={197}
          height={156}
          src="/CALORIA.png"
        />
        <PinkText>Potencialize seu metabolismo</PinkText>

        <Paragraph style={{ fontWeight: 400, fontSize: 20 }}>
          <br />
          Queime gordura de forma rápida e natural através do aumento do seu
          metabolismo. Experimente agora o poder de Dexfit
        </Paragraph>
      </Box>

      <Box
        ref={ref2}
        sx={{
          width: { xs: "50%", md: "20%" },
          fontWeight: 900,
          fontSize: 24,
          margin: 5,
          animation: isAnimated2 ? "fadeInRight 1s" : "",
          opacity: isAnimated2 ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <Image
          style={{ objectFit: "contain" }}
          layout="responsive"
          width={197}
          height={156}
          src="/MEDIDAS.png"
        />
        <PinkText>Reduza medidas em tempo recorde!</PinkText>
        <Paragraph style={{ fontWeight: 400, fontSize: 20 }}>
          <br />
          Veja resultados visíveis em pouco tempo e diga adeus às roupas plus
          size.
        </Paragraph>
      </Box>

      <Box
        ref={ref3}
        sx={{
          width: { xs: "50%", md: "20%" },
          fontWeight: 900,
          fontSize: 24,
          margin: 5,
          animation: isAnimated3 ? "fadeInRight 1s" : "",
          opacity: isAnimated3 ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <Image
          style={{ objectFit: "contain" }}
          layout="responsive"
          width={197}
          height={156}
          src="/BELEZA.png"
        />
        <PinkText>Desperte a beleza interior</PinkText>
        <Paragraph style={{ fontWeight: 400, fontSize: 20 }}>
          <br />
          Tenha uma pele firme, radiante e saudável, cabelos deslumbrantes e
          unhas impecáveis.
        </Paragraph>
      </Box>
    </Box>
  );
}
