"use client";
import { Box } from "@mui/material";
import { Montserrat } from "next/font/google";
import Card1_rosa from "./Cards/rosas/card1_rosa";
import Card2_rosa from "./Cards/rosas/card2_rosa";
import Card3_rosa from "./Cards/rosas/card3_rosa";
import Card4_rosa from "./Cards/rosas/card4_rosa";
import Card5_rosa from "./Cards/rosas/card5_rosa";
import Card6_rosa from "./Cards/rosas/card6_rosa";
import Rodape_rosa from "./Cards/rosas/rodape_rosa";
import Card1_roxo from "./Cards/roxos/card1_roxo";
import Card2_roxo from "./Cards/roxos/card2_roxo";
import Card3_roxo from "./Cards/roxos/card3_roxo";

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

      {/* essa div pode sumir */}
      <div
        style={{
          width: "100%",
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        SITE ROXO
      </div>

      <div style={{ color: "rgba(140, 0, 255, 1)" }}>
        {/* div que vai envolver todo o site roxo dps pegar a box igual usamos no site rosa, fiz assim pq n separamos os 2 sites ainda */}
        <Card1_roxo />

        <Card2_roxo />

        <Card3_roxo />
      </div>
    </Box>
  );
}
