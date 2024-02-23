/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateGift from "./pages/CreateGift";
import ShowGift from "./pages/ShowGift";
import EditGift from "./pages/EditGift";
import DeleteGift from "./pages/DeleteGift";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gifts/create" element={<CreateGift />} />
      <Route path="/gifts/details/:id" element={<ShowGift />} />
      <Route path="/gifts/edit/:id" element={<EditGift />} />
      <Route path="/gifts/delete/:id" element={<DeleteGift />} />
    </Routes>
  );
}

export default App;
