"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

export default function AddAndEdit() {
   const [products, setProducts] = useState([]);
   const [formData, setFormData] = useState({});

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
         .post("http://localhost:3001/products", formData)
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
               onChange={handleInputChange}
            />
            <TextField
               id="productPrice"
               label="Description"
               variant="standard"
               name="description"
               onChange={handleInputChange}
            />
            <TextField
               id="productPrice"
               label="Price"
               variant="standard"
               name="price"
               onChange={handleInputChange}
            />
            <TextField
               id="productPrice"
               label="Category"
               variant="standard"
               name="category"
               onChange={handleInputChange}
            />{" "}
            <TextField
               type="file"
               label="image"
               variant="standard"
               name="image"
               onChange={handleInputChange}
            />{" "}
            <TextField
               id="productPrice"
               label="stockQuantity"
               variant="standard"
               name="stockQuantity"
               onChange={handleInputChange}
            />
            <button type="submit">Save Product</button>
         </Box>
      </form>
   );
}
