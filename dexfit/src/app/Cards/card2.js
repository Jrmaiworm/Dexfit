import { Box } from "@mui/material";
import Image from "next/image";
import { Paragraph, PinkText } from "../styles";

export default function Card2() {
  return (
    <Box
      sx={{
        width: "90%",
        borderRadius: 3,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "rgba(108, 93, 158, 0.19)",
        alignItems: "center",
        padding: 5,
        textAlign: "center",
        justifyContent: { xs: "center", md: "space-around" },
      }}
    >
      <Box
        sx={{
          width: { xs: "70%", md: "20%" },
          fontWeight: 900,
          fontSize: 24,
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
        sx={{
          width: { xs: "90%", md: "20%" },
          fontWeight: 900,
          fontSize: 24,
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
        sx={{
          width: { xs: "90%", md: "20%" },
          fontWeight: 900,
         fontSize: 24
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
