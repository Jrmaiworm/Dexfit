"use client";
import { Box } from "@mui/material";
import { Montserrat } from "next/font/google";
import Card1_rosa from "./Cards/card1_rosa";
import Card2_rosa from "./Cards/card2_rosa";
import Card3_rosa from "./Cards/card3_rosa";
import Card4_rosa from "./Cards/card4_rosa";
import Card5_rosa from "./Cards/card5_rosa";
import Card6_rosa from "./Cards/card6_rosa";
import Rodape_rosa from "./Cards/rodape_rosa";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box
      className={montserrat.className}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#1e1b2c",
        color: "#ff0181",
        fontSize: { xs: 20, md: 40 },
        fontWeight: 700,
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: 'url("/FUNDODEGRADE.png")',
        backgroundSize: "cover",
        // backgroundPosition: 'center',
      }}
    >
      <Card1_rosa />

      <Card2_rosa />

      <Card3_rosa />

      <Card4_rosa />

      <Card5_rosa />

      <Card6_rosa />

      <Rodape_rosa />
    </Box>
  );
}
