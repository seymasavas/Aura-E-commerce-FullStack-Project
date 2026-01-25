import React from "react";
import Header from '/src/layout/Header.jsx'
import Footer from "../layout/Footer";
import PageContent from "../layout/PageContent.jsx";
import Hero from "../components/Hero.jsx";

function HomePage(){
    return (
        <div>
            <Header/>
            <Hero/>
            <PageContent/>
            <Footer/>                
        </div>
    )
}
export default HomePage;