import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AdminNewEmployee from "../Components/AdminNewEmployee";




function Home() {
    return (
      <>
      <div>
            <Navbar/>
            <AdminNewEmployee/>
            <Footer/>
      </div>
      </>
    );
  }

  export default Home;
  