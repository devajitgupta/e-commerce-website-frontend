"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Products = () => {
   const [products, setProducts] = useState([]);
   console.log(products);
   useEffect(() => {
      axios
         .get("http://localhost:3001/products")

         .then((response) => {
            // Update the state with the response data
            setProducts(response.data);
         })
         .catch((error) => {
            console.error("Error fetching data:", error);
         });
   }, []);
   return (
      <React.Fragment>
         <CssBaseline />
         <Container maxWidth="sm">
            <Box sx={{ bgcolor: "#f5f5f5", height: "100vh", width: "600px" }} />
         </Container>
      </React.Fragment>
   );
};

export default Products;
