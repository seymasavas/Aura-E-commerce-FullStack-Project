
import teamhero1 from "../../assets/teamhero1.jpg";     
import teamhero2 from "../../assets/teamhero2.jpg";
import teamhero3 from "../../assets/teamhero3.jpg";
import teamhero4 from "../../assets/teamhero4.jpg";
import teamhero5 from "../../assets/teamhero5.jpg";
export default function TeamHero() {
    return (
        <>
        <div className="w-full bg-white font-['Montserrat']">
        
        <div className="flex flex-col lg:flex-row gap-2 w-full  mx-auto">
            
            <div className="w-full lg:w-1/2 h-[530px]">
                <img 
                    src={teamhero1} 
                    alt="Team Large" 
                    className="w-full h-full object-cover" 
                />
            </div>

            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2 h-auto lg:h-[530px]">
                
                <div className="w-full h-[260px]">
                    <img src={teamhero2} alt="Team Small 1" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[260px]">
                    <img src={teamhero3} alt="Team Small 2" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[260px]">
                    <img src={teamhero4} alt="Team Small 3" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[260px]">
                    <img src={teamhero5} alt="Team Small 4" className="w-full h-full object-cover" />
                </div>

            </div>

        </div>

    </div>
        </>
    );
}   