
import { Contact } from 'lucide-react';
import ContactHero from '/src/components/Contact/ContactHero';
import Header from '/src/layout/Header.jsx'
import ContactInfoCards from '/src/components/Contact/ContactInfoCards.jsx';
import ContactCTA from '/src/components/Contact/ContactCTA.jsx';
import Footer from '/src/layout/Footer.jsx';
function ContactPage() { 
    return (
        <>
            <Header/>
            <ContactHero/>
            <ContactInfoCards/>
            <ContactCTA/>
            <Footer/>


        </>
    )
}
export default ContactPage;
