import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ApplicantsList from "../Components/ApplicantsList";




function Home() {
    return (
      <>
      <div>
            <Navbar/>
            <ApplicantsList/>
            <Footer/>
      </div>
      </>
    );
  }

  export default Home;
  