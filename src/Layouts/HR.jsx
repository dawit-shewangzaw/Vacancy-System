import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NewPost from "../Components/NewPost";
import Preview from "../Components/Preview";
import ApplicationS from "../Components/Application";
import ApplicantDetail from "../Components/ApplicantDetail";

function HR() {
    return (
      <>
      <Navbar/>
      {/*<BrowserRouter>
        <ApplicationS/>
      </BrowserRouter>*/}
      <Router>
      <ApplicantDetail/>
      </Router>
        {/*<Router>
            <Routes>
                <Route path="/" element={<NewPost />} />
                <Route path="/preview" element= {<Preview/>}/>
            </Routes>
        </Router>*/}
            <Footer/>
      </>
    );
  }
  export default HR;