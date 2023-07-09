import { Box } from "@mui/material";
import Image from "next/image";
import { Button, Text } from "../styles";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Card3() {
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
          <Text>
            Sinta-se uma MULHER&nbsp;
          </Text>
          <Text pink>
            COMPLETA&nbsp; novamente!
          </Text>
        </Box>
        <Box>
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
                
                display: "flex",
                flexDirection: "row",

                display: "inline-block",
              }}
            >
              Transforme seu corpo&nbsp;
              <strong>sem efeitos colaterais</strong>
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
              Recupere sua&nbsp;
              <strong>auto estima</strong> e brilhe como nunca
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
              Prepare-se para&nbsp;
              <strong> reduzir os números do manequim&nbsp;</strong>e arrasar
              com sua nova silhueta
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
              Desfrute da&nbsp;
              <strong>sensação de saciedade&nbsp;</strong>
              duradoura e conquiste o controle sobre a sua alimentação
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
                paddingBottom:15,
                display: "inline-block",
              }}
            >
              <div style={{ fontWeight: 700 }}>100% NATURAL</div>
            </Text>
          </Box>
        </Box>

        <Button>EU QUERO SER UMA MULHER COMPLETA</Button>
      </Box>
    </Box>
  );
}
