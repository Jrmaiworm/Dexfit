import { Box } from "@mui/material";
import Image from "next/image";
import { Button, Paragraph, Text } from "../styles";

export default function Card9() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: { xs: 5, md: 5 },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          padding: { xs: 0, md: 5 },
        }}
      >
        <Image
          style={{ objectFit: "contain" }}
          layout="responsive"
          width={525}
          height={579}
          src="/Mask group (1).png"
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          paddingBottom: 5,
        }}
      >
        <Box
          sx={{
            width: "100%",
            paddingBottom: 5,
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text>
            <Text pink>Recomendado&nbsp;</Text>
            pelos maiores especialistas
          </Text>
        </Box>
        <Box>
          <Box
            sx={{
              fontSize: { xs: 15, md: 20 },
              color: "white",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 5,
            }}
          >
            Contamos com um amplo respaldo de inúmeros profissionais altamente
            respeitados em todo o território brasileiro, que não hesitam em
            recomendar como a solução ideal para tratar de forma eficaz os
            problemas de pele de seus pacientes. Esses especialistas, cuja
            experiência e conhecimento são reconhecidos, são unânimes em afirmar
            que os componentes extremamente precisos e de qualidade excepcional
            presentes nesse tratamento conferem resultados surpreendentes
          </Box>
        </Box>

        <Button>EU QUERO SER UMA MULHER COMPLETA</Button>
      </Box>
    </Box>
  );
}
