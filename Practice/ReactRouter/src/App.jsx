import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import { Route, Routes } from "react-router-dom";
import Product from "../pages/Product";
import Navbar from "../components/Navbar";
import Men from "../pages/Men";
import Women from "../pages/Women";
import RandomAbout from "../pages/RandomAbout";
import Courses from "../pages/Courses";
import CourseDetail from "../pages/CourseDetail";
import AnyCourse from "../pages/AnyCourse";
import NotFound from "../pages/NotFound";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/men" element={<Men />} />
        <Route path="/product/women" element={<Women />} />
        <Route path='/about/:id' element={<RandomAbout />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/courses/:courseId' element={<AnyCourse />} />
        <Route path='/courses/:courseId/detail' element={<CourseDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
