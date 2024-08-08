import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Notification from "../Components/Notification";




function Home() {
    return (
      <>
      <div>
            <Navbar/>
            <Notification/>
            <Footer/>
      </div>
      </>
    );
  }

  export default Home;
  