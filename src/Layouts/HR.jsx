import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NewPost from "../Components/NewPost";
import Preview from "../Components/Preview";

function HR() {
    return (
      <>
      <Navbar/>
        <Router>
            <Routes>
                <Route path="/" element={<NewPost />} />
                <Route path="/preview" element= {<Preview/>}/>
            </Routes>
        </Router>
            <Footer/>
      </>
    );
  }
  export default HR;