import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NotificationDetail from "../Components/NotificationDetail";




function Home() {
    return (
      <>
      <div>
            <Navbar/>
            <NotificationDetail/>
            <Footer/>
      </div>
      </>
    );
  }

  export default Home;
  