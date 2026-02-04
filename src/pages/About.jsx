import AboutContent from '../components/About/AboutContent';
import AboutHero from '../components/About/AboutHero';
import AboutStats from '../components/About/AboutStats';
import AboutVideo from '../components/About/AboutVideo';
import Header from '../layout/Header';
import AboutTeam from '../components/About/AboutTeam.jsx';
import AboutClients from '../components/About/AboutClients.jsx';
import AboutTestimonials from '../components/About/AboutTestimonials.jsx';
import Footer from '../layout/Footer';
function AboutPage() {

    return(
        <>
            <Header/>
            <AboutHero/>
            <AboutContent/>
            <AboutStats/>
            <AboutVideo/> 
            <AboutTeam/>
            <AboutClients/>
            <AboutTestimonials/>
            <Footer/>

        </>
    )
 }
export default AboutPage;