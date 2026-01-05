import React from "react";
import Header from '/src/layout/Header.jsx'
import Footer from "../layout/Footer";
import PageContent from "../layout/PageContent.jsx";

function HomePage(){
    return (
        <div>
            <Header/>
            <PageContent/>
            <Footer/>                
        </div>
    )
}
export default HomePage;