import { Box } from "@mui/material";
import Image from "next/image";
import {
  Button,
  PText,
  Text,
  TextCard,
} from "../styles";

export default function Card7() {
  const ListCard = () => {
    const options = [
      {
        title: "VITAMINA C (ÁC. ASCÓRBICO) 45 MG",
        subTitle:
          "A vitamina C não só fortalece a imunidade, como também contribui para alcançar um corpo mais magro, acelerando o metabolismo.",
        image: "/vitac.png",
      },
      {
        title: "QUITOSANA 100 MG",
        subTitle:
          "Faz com que você se sinta alimentada com uma quantidade mais baixa de alimentos. Isso é possível porque seu organismo vai reter mais nutrientes.",
        image: "/quito.png",
      },
      {
        title: "COLÁGENO HIDROLISADO 300 MG",
        subTitle:
          "Promove firmeza à pele da sua barriga, braços, rosto e perna, reduzindo a flacidez que ocorre depois de",
        image: "/emagrecer 1.png",
      },
      {
        title: "SPIRULINA 100 MG",
        subTitle:
          "Mais um aliado para que seu organismo se sinta saciado com menos quantidade de comida.",
        image: "/spiru.png",
      },
      {
        title: "PSYLLIUM 100 MG",
        subTitle:
          "Trabalha retirando a gordura do seu organismo e, para esse feito, ele usa nada menos que as fezes.",
        image: "/psy.png",
      },
    ];

    return (
      <>
        {options.map((option, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              marginBottom:2
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 3,
                justifyContent: "center",
                width: 100,
                height: 100,
                borderRadius: "50%",
                backgroundColor: "white",
             
              }}
            >
              <Image
                style={{ objectFit: "contain" }}
                width={100}
                height={100}
                src={option.image}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 1,
              }}
            >
              <PText>{option.title}</PText>
              <TextCard>{option.subTitle}</TextCard>
            </Box>
            
          </Box>
        ))}
        <br />
      </>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        width: "100%",
        padding: { xs: 5, md: 5 },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          padding: { xs: 0, md: 10},
          justifyContent: "center",
        }}
      >
        <Image
          style={{ objectFit: "contain", marginBottom: 80 }}
          layout="responsive"
          width={100}
          height={100}
          src="/3unidades.png"
        />
        <Button>EU QUERO SER EMAGRECER</Button>
        <br />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          paddingBottom: 15,
        }}
      >
        <Box
          sx={{
            width: "100%",
            paddingBottom: 5,
            alignItems: "center",
            alignSelf: "center",
            marginTop:10,
          }}
        >
          <Text>Nossa composição</Text>
        </Box>
        <Box>
          <ListCard />
          
        </Box>
      </Box>
    </Box>
  );
}
