import { Box } from "@mui/material";
import Image from "next/image";
import { Text } from "../styles";

export default function Card5() {
  return (
    <Box
      sx={{
        // boxShadow: '0 6px 80px -18px rgba(220,220,220, 0.81)',
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent:'center',
        width: "100%",
        padding: { xs: 5, md: 10 },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          
        }}
      >
          <Text>
            Revele sua&nbsp;verdadeira
          </Text>
        <div>
          <Text pink>beleza e reconquiste</Text>
        </div>
        <Text pink>sua autoestima&nbsp;</Text>
        <Text>com Dexfit!</Text>

        <br />
        <Box
          sx={{
            fontWeight: 700,
            fontSize: { xs: 15 , md: 20 },
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 10,
            marginBottom: 3,
          }}
        >
          <Image
            style={{ objectFit: "contain", marginRight: 5 }}
            width={14}
            height={14}
            src="/circle.png"
          />

          <Text
            style={{
              fontWeight: 400,
            fontSize: { xs: 15 , md: 20 },
              display: "flex",
              flexDirection: "row",

              display: "inline-block",
            }}
          >
            <div style={{ fontWeight: 700 }}>
              Você tem se esforçado para emagrecer, mas está enfrentando
              dificuldades?
            </div>
          </Text>
        </Box>

        <Box
          sx={{
            fontWeight: 700,
          fontSize: { xs: 15 , md: 20 },
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 3,
          }}
        >
          <Image
            style={{ objectFit: "contain", marginRight: 5 }}
            width={14}
            height={14}
            src="/circle.png"
          />

          <Text
            style={{
              fontWeight: 400,
            fontSize: { xs: 15 , md: 20 },
              display: "flex",
              flexDirection: "row",

              display: "inline-block",
            }}
          >
            <div style={{ fontWeight: 700 }}>
              Ficou com gordura acumulada ao redor do umbigo?
            </div>
          </Text>
        </Box>

        <Box
          sx={{
            fontWeight: 700,
          fontSize: { xs: 15 , md: 20 },
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 3,
          }}
        >
          <Image
            style={{ objectFit: "contain", marginRight: 5 }}
            width={14}
            height={14}
            src="/circle.png"
          />

          <Text
            style={{
              fontWeight: 400,
            fontSize: { xs: 15 , md: 20 },
              display: "flex",
              flexDirection: "row",

              display: "inline-block",
            }}
          >
            <div style={{ fontWeight: 700 }}>A barriga está flácida?</div>
          </Text>
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          padding: 5,
        }}
      >
        <Image
          style={{ objectFit: "contain", marginRight: 5 }}
          layout="responsive"
          width={800}
          height={675}
          src="/Mask group.png"
        />
      </Box>
    </Box>
  );
}
