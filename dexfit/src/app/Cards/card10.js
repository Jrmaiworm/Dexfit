import { Box } from "@mui/material";
import Image from "next/image";
import { Button, Paragraph, Text } from "../styles";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Card10() {
  const [isAnimated, setIsAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
        padding: { xs: 5, md: 5 },
      }}
    >
      
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          padding: { xs: 0 , md: 15 } ,
        
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
            paddingBottom: 5 ,
           alignItems:'center',
           alignSelf:'center'
          }}
        >
          <Text >Garantia de&nbsp;
            <Text pink>30 dias&nbsp;</Text>
            ou seu <Text pink>dinheiro de volta!</Text>
          </Text>
        </Box>
        <Box>
          <Box
            sx={{
              fontSize: { xs: 15 , md: 20 },
              color: "white",
              fontWeight: 700 ,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 15,
            }}
          >
            Confiamos tanto de que os resultados do Dexfit irão lhe surpreender, que podemos dar 
            uma garantia incondicional de até 30 dias após o recebimento do produto. É isso mesmo!
             Se dentro desse prazo você não estiver satisfeito com os resultados, basta entrar em 
             contato solicitando o reembolso e nos enviar 
            os potes (mesmo que vazios) para que nós lhe devolvamos 100% do seu dinheiro!
       
       
          </Box>
        </Box>
        
        <Button>EU QUERO SER UMA MULHER COMPLETA</Button>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          padding: { xs: 5, md: 5 },
          displey:'flex',
          justifyContent:'center',
          alignItems:'center',
          animation: isAnimated ? "fadeIn 1s" : "",
          animationDelay: "1s",
      
        }}
      >
        <Image
          style={{ objectFit: "contain",padding:25 ,  }}
          layout="responsive"
          width={225}
          height={225}
          src="/garantia.png"
        />
      </Box>
    </Box>
  );
}
