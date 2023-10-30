"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Page({ params }) {
   const [formData, setFormData] = useState({
      title: "",
      description: "",
      price: "",
      category: "",
      image: "",
      stockQuantity: "",
   });

   const id = params.edit;
   console.log(formData);

   useEffect(() => {
      // Fetch product data from your API
      axios.get(`http://localhost:3001/products/${id}`).then((response) => {
         const productData = response.data;

         setFormData({
            title: productData.title,
            description: productData.description,
            price: productData.price,
            category: productData.category,
            image: productData.image,
            stockQuantity: productData.stockQuantity,
         });
      });
   }, [id]);

   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      // Send the form data to your API endpoint for saving to the database
      axios
         .put(`http://localhost:3001/products/${id}`, formData)
         .then((response) => {
            console.log("Data saved successfully:", response.data);
         })
         .catch((error) => {
            console.error("Error saving data:", error);
         });
   };

   return (
      <form onSubmit={handleSubmit}>
         <Box
            sx={{
               "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
         >
            <TextField
               id="productName"
               label="Title"
               variant="standard"
               name="title"
               value={formData.title}
               onChange={handleInputChange}
            />
            <TextField
               id="productDescription"
               label="Description"
               variant="standard"
               name="description"
               value={formData.description}
               onChange={handleInputChange}
            />
            <TextField
               id="productPrice"
               label="Price"
               variant="standard"
               name="price"
               value={formData.price}
               onChange={handleInputChange}
            />
            <TextField
               id="productCategory"
               label="Category"
               variant="standard"
               name="category"
               value={formData.category}
               onChange={handleInputChange}
            />
            <TextField
               id="productImage"
               type="file"
               label="Image"
               variant="standard"
               name="image"
               onChange={handleInputChange}
            />
            <TextField
               id="productStockQuantity"
               label="Stock Quantity"
               variant="standard"
               name="stockQuantity"
               value={formData.stockQuantity}
               onChange={handleInputChange}
            />
            <button type="submit">Save Product</button>
         </Box>
      </form>
   );
}
