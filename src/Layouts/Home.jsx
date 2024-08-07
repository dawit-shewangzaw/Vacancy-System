import React from "react";
import Navbar from "../Components/Navbar";
import IntroPage from "../Components/IntroPage";
import Cards from "../Components/Cards";
import JobTable from "../Components/JobTable";
import Footer from "../Components/Footer";
import Apply from "../Components/Apply";


function Home() {
    return (
      <>
      <div>
            <Navbar/>
            <Apply/>
            <Footer/>
      </div>
      </>
    );
  }

  export default Home;
  