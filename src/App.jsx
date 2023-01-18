import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Genres, Home, Movie, PopularMovie } from "./pages";
import Navbar from "./components/Navbar";
import "./App.css";
import Trailers from "./components/Trailers";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/popular" element={<PopularMovie />}></Route>
          <Route path="/genre" element={<Genres />}></Route>
          <Route path="/trailer/:id" element={<Trailers />}></Route>
          <Route path="/movie/:id" element={<Movie />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
