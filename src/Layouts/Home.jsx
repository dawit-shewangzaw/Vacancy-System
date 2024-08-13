import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ApplicantDetail from "../Components/ApplicantDetail";




function Home() {
    return (
      <>
      <div>
            <Navbar/>
            <ApplicantDetail/>
            <Footer/>
      </div>
      </>
    );
  }

  export default Home;
  