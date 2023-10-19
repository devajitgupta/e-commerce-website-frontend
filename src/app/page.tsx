import Image from "next/image";
import styles from "./page.module.css";
import Header from "./layouts/main/Header.js";
import Products from "./Pages/Products.js";
import { Box } from "@mui/material";

export default function Home() {
   return (
      <div>
         <Header />
         <Box
            sx={{
               width: "100%",
               height: "100vh",
               backgroundColor: "#f5f5f5",
            }}
         >
            <Products />
         </Box>
      </div>
   );
}
