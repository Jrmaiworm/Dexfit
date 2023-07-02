import { Box } from "@mui/material";
import Image from "next/image";
import { Button, Paragraph, Text } from "../styles";

export default function Card7() {

    const ListCard = () => {
        return (
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    padding: { xs: 5, md: 5 },
                }} >
                    <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 125,
    height: 125,
    borderRadius: "50%",
    backgroundColor: "white",
    marginBottom: 30,
  }}
>
  <Image
    style={{ objectFit: "contain" }}
    layout="responsive"
    width={125}
    height={125}
    src="/vitac.png"
  />
</Box>

                 </Box>
        )
    }
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
                    width: { xs: "100%", md: "50%" },
                    padding: { xs: 0, md: 5 },

                }}
            >
                <Image
                    style={{ objectFit: "contain", marginBottom: 30 }}
                    layout="responsive"
                    width={525}
                    height={579}
                    src="/3unidades.png"
                />
                <Button>EU QUERO SER EMAGRECER</Button>
            </Box>
            <Box
                sx={{
                    width: { xs: "100%", md: "50%" },
                    paddingBottom: 15,

                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        paddingBottom: 5,
                        alignItems: 'center',
                        alignSelf: 'center'
                    }}
                >
                    <Text >
                        Nossa composição
                    </Text>
                </Box>
                <Box>
                    <ListCard />
                </Box>

            </Box>
        </Box>
    );
}
