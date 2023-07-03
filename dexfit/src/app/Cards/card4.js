import { Box } from "@mui/material";
import { Montserrat } from "next/font/google";
import theme from '../theme';
import Image from "next/image";
import {
    Button,
    HighlightTextContainer,
    Paragraph,
    PinkText,
    Text,
    TextCard,
    TextContainer,
    Title,
} from "../styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Card4() {
    return (
        <Box
            sx={{
                // boxShadow: '0 6px 80px -18px rgba(220,220,220, 0.81)',
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                width: "100%",
                padding: { xs: 5, md: 10 },
            }}
        >
            <Box
                sx={{
                    width: { xs: "100%", md: "40%" },
                    padding: { xs: 0, md: 5 },
                }}
            >
                <TextContainer>

                    <Text>Não perca os <Text pink> relatos impressionantes </Text></Text>


                    <Box sx={{ fontSize: { xs: 15, md: 25 }, color: "white", marginTop: 5 }}>
                        Descubra os relatos inspiradores das mulheres que usaram o poderoso remédio DexFit para emagrecer.
                    </Box>

                    <Box sx={{ fontSize: { xs: 15, md: 25 }, color: "white", marginTop: 5 }}>
                        O DexFit impulsionou o metabolismo, controlou o apetite e aumentou a queima de gordura!
                    </Box>

                    <Box sx={{ fontSize: { xs: 15, md: 25 }, color: "white", marginTop: 5 }}>
                        Leia esses relatos e seja motivado a começar sua própria jornada de transformação rumo a uma vida mais saudável e confiante com o DexFit!
                    </Box>
                    <br />
                    <br />
                    <Button>EU QUERO MUDAR</Button>
                    <br />
                    <br />
                </TextContainer>
            </Box>

            <Box
                sx={{
                    // boxShadow: '0 6px 80px -18px rgba(220,220,220, 0.81)',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: { xs: "100%", md: "60%" },
                    padding: { xs: 0, md: 10 },

                }}
            >


                <Box sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                    padding: 3,
                    backgroundColor: theme.colors.secondary,
                    borderRadius: 2,
                    color: "white",

                }}>
                    <Image
                        style={{ objectFit: "contain", margin: 15, }}
                        layout="responsive"
                        width={175}
                        height={175}
                        src="/Brasil.png"
                    />
                    <Box sx={{display: 'flex',flexDirection:'column',
                }}>
                        <Title>Brasil Slim</Title>
                       <TextCard >Utilizamos na nossa rede com nossos clientes o Mãe Slim e desde que começamos a utilizar os resultados no emagrecimento melhoraram muito. Somos gratos por ter conhecido um produto tão incrível. Hoje dentro das clínicas Brasil Slim não sai um cliente sem levar o emagrecedor queridinho das mulheres do Brasil.</TextCard> </Box>
                   </Box>
                <Box>
                

            </Box>
          

            <Box sx={{
                     display: "flex",
                     flexDirection: { xs: "column", md: "row" },
                    padding: 3,
                    backgroundColor: theme.colors.secondary,
                    borderRadius: 2,
                    color: "white",
                    marginTop:10

                }}>
                  
                    <Box sx={{display: 'flex',flexDirection:'column',
                }}>
                        <Title>Clínica EmagreSee</Title>
                       <TextCard >Na nossa clínica tínhamos grande dificuldade em gerar resultados em mamães pela grande dificuldade de emagrecer que elas tem. Depois do uso do Mãe Slim tudo mudou, hoje somos referência no emagrecimento saudável em Viçosa-MG e devemos muito ao Mãe Slim. Vamos sempre indiciar porque a satisfação com o Mãe Slim dentro da clínica é de 100% de nossas clientes.</TextCard> </Box>
                       <Image
                        style={{ objectFit: "contain", margin: 15, }}
                        layout="responsive"
                        width={175}
                        height={175}
                        src="/emagresse.png"
                    />
                   </Box>
                   
                <Box>
                

            </Box>
        </Box>
        </Box >
    );
}
