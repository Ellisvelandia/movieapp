import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Movie, PopularMovie } from "./pages";
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
          <Route path="/movie/:id" element={<Movie />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
