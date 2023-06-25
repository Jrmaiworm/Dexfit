"use client";
import { Box } from "@mui/material";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import {
  Button,
  HighlightTextContainer,
  Paragraph,
  PinkText,
  Text,
  TextContainer,
} from "./styles";
import Card1 from "../app/Cards/card1";
import Card2 from "./Cards/card2";
import Card3 from "./Cards/card3";
import Card5 from "./Cards/card5";
import Card9 from "./Cards/card9";

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
        fontSize: { xs: 30, md: 40 },
        fontWeight: 700,
        alignItems: "center",
        backgroundImage: 'url("/FUNDODEGRADE.png")',
        backgroundSize: "cover",
        // backgroundPosition: 'center',
      }}
    >
      <Card1 />

      <Card2 />

      <Card3 />

      {/* <Card4 /> */}

      <Card5 />

      {/* <Card6 /> */}

      {/* <Card7 /> */}

      {/* <Card8 /> */}

      <Card9 />

      {/* <Card10 /> */}
    </Box>
  );
}
