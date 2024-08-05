import React from "react";
import Navbar from "../Components/Navbar";
import IntroPage from "../Components/IntroPage";
import Cards from "../Components/Cards";
import JobTable from "../Components/JobTable";


function Home() {
    return (
      <>
      <div>
            <Navbar/>
            <IntroPage/>
            <Cards/>
            <JobTable/>
            
      </div>
      </>
    );
  }

  export default Home;
  