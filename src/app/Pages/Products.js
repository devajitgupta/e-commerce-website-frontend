"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CARD_PROPERTY = {
   borderRadius: 3,
   boxShadow: "0 5px 8px rgba(0, 0.9, 0.6, 0.7)",
   transition: "transform 0.3s, box-shadow 0.9s",
};

const Products = () => {
   const router = useRouter();

   const [products, setProducts] = useState([]);
   console.log(products);
   const [imageSrc, setImageSrc] = useState("");

   useEffect(() => {
      // Fetch product data from your API
      axios
         .get("http://localhost:3001/products")
         .then((response) => {
            // Check if the response data is an array before setting it in the state
            if (Array.isArray(response.data)) {
               setProducts(response.data);
            } else {
               console.error("Response data is not an array:", response.data);
            }
         })
         .catch((error) => {
            console.error("Error fetching data:", error);
         });
   }, []);
   const handleDelete = (id) => {
      //console.log("delete:", id);
      if (window.confirm("Are you sure you want to delete")) {
         axios
            .delete(`http://localhost:3001/products/${id}`)
            .then((response) => {
               // Handle successful deletion, e.g., by updating the UI or navigating to a different page.
               console.log("Product deleted:", response.data);
               router.refresh();
            })
            .catch((error) => {
               // Handle error, e.g., display an error message to the user.
               console.error("Error deleting product:", error);
            });
      }
   };

   return (
      <Container>
         <Grid container spacing={4} margin={1} padding={3}>
            {products.map((product, index) => (
               <Grid item xs={12} sm={12} md={4} lg={4} key={product._id}>
                  <Card
                     sx={{
                        ...CARD_PROPERTY,
                        ":hover": {
                           transform: "scale(1.03)",
                        },
                     }}
                  >
                     <CardMedia
                        component="img"
                        alt="Product Image"
                        height="100"
                        width="100"
                        src={`http://localhost:3001/products/${product?.image}`}
                     />

                     <CardContent sx={{ p: 3 }}>
                        <Typography
                           gutterBottom
                           variant="h5"
                           sx={{ fontWeight: "bold" }}
                           component="div"
                        >
                           {product.title} {/* Use the product title */}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                           {product.description}{" "}
                           {/* Use the product description */}
                        </Typography>
                     </CardContent>
                     <CardActions sx={{ pt: 0, px: 3, pb: 3 }}>
                        <Link href={`/edit/${product._id}`}>Edit</Link>
                        <Button
                           onClick={() => {
                              handleDelete(product._id);
                           }}
                        >
                           Delete
                        </Button>
                     </CardActions>
                  </Card>
               </Grid>
            ))}
         </Grid>
      </Container>
   );
};

export default Products;
