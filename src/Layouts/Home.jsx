import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ManagerNotificationDetail from "../Components/ManagerNotificationDetail";





function Home() {
    return (
      <>
      <div>
            <Navbar/>
            <ManagerNotificationDetail/>     
            <Footer/>
      </div>
      </>
    );
  }

  export default Home;
  