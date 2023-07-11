import { Box } from "@mui/material";
import Image from "next/image";

export default function Rodape_rosa() {
  return (
    <Box
      sx={{
        height: { xs: 200, md: 300 },
        backgroundColor: "rgba(255, 1, 129, 1)",
        width: "100%",
      }}
    >
      <Box sx={{ width: { xs: "50%", md: "25%" } }}>
        <Image
          layout="responsive"
          style={{
            objectFit: "contain",
            marginTop: 74,
            marginLeft: 78,
          }}
          width={332}
          height={106}
          src="/Logo-original-5 1.png"
        />
      </Box>
    </Box>
  );
}
