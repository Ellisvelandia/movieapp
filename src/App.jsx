import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, PopularMovie } from "./pages";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/popular" element={<PopularMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
