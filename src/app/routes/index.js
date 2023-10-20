"use client";
import React from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";

export const PATH_PAGE = {
   addAndEdit: "/addProducts", // Correct path format
};

export default function Router() {
   // Get the current location using useLocation

   // Define your routes using useRoutes
   const element = useRoutes([
      {
         path: "/addProducts", // Path should match the one defined in PATH_PAGE
         element: <AddAndEditProducts />, // Use the correct component name
      },
   ]);

   return element;
}
