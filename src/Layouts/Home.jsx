import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ManagerNotification from "../Components/ManagerNotification";




function Home() {
    return (
      <>
      <div>
            <Navbar/>
            <ManagerNotification/>        
            <Footer/>
      </div>
      </>
    );
  }

  export default Home;
  