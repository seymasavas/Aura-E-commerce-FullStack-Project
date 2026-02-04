import React from 'react';
import Header from '../layout/Header';
import TeamInnerHeader from '../components/Team/TeamInnerHeader';
import  TeamHero  from '../components/Team/TeamHero';
import TeamMembers  from '../components/Team/TeamMembers';
import TeamCta from '../components/Team/TeamCta';
import Footer from '../layout/Footer';
function    Team() {

    return (
            <>
            <Header/>
            <TeamInnerHeader/>
            <TeamHero/>
            <TeamMembers/> 
            <TeamCta/>   
            <Footer/>
            
            </>


    )
 }
export default Team;