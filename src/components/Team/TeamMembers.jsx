      
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team2.jpg';
import team3 from '../../assets/team3.jpg'; 
import team4 from '../../assets/team4.jpg';
import team5 from '../../assets/team5.jpg';
import team6 from '../../assets/team6.jpg'; 
import team7 from '../../assets/team7.jpg';     
import team8 from '../../assets/team8.jpg'; 
import team9 from '../../assets/team9.jpg';
import { Facebook, Instagram, Twitter } from "lucide-react";


export default function TeamMembers() {
    const members = [
    { id: 1, name: "username", job: "Profession", image: team1 },
    { id: 2, name: "username", job: "Profession", image: team2 },
    { id: 3, name: "username", job: "Profession", image: team3 },
    { id: 4, name: "username", job: "Profession", image: team4 },
    { id: 5, name: "username", job: "Profession", image: team5 },
    { id: 6, name: "username", job: "Profession", image: team6 },
    { id: 7, name: "username", job: "Profession", image: team7 },
    { id: 8, name: "username", job: "Profession", image: team8 },
    { id: 9, name: "username", job: "Profession", image: team9 },
  ];
    return (
        <>
        <div className="w-full lg:w-[1050px] flex lg:items-center mx-auto bg-white font-['Montserrat']">
      
        <div className="container mx-auto px-4 py-[112px]">
            
            <div className="flex flex-col items-center text-center gap-[10px] mb-[112px]">
                <h2 className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">
                    Meet Our Team
                </h2>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                
                {members.map((member) => (
                    
                    <div key={member.id} className="flex flex-col items-center w-full bg-white">
                        
                        <div className="w-full h-[231px] overflow-hidden">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        <div className="flex flex-col items-center p-[30px] gap-[10px] w-full">
                            
                            <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                                {member.name}
                            </h5>
                            
                            <h6 className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                                {member.job}
                            </h6>
                            
                            <div className="flex items-center gap-[20px] mt-[5px]">
                                <a href="#" target="_blank" rel="noreferrer" className="text-[#23A6F0] hover:text-blue-700 transition-colors">
                                    <Facebook size={24} fill="#23A6F0" stroke="none"/>
                                </a>
                                <a href="#" target="_blank" rel="noreferrer" className="text-[#23A6F0] hover:text-blue-700 transition-colors">
                                    <Instagram size={24} />
                                </a>
                                <a href="#" target="_blank" rel="noreferrer" className="text-[#23A6F0] hover:text-blue-700 transition-colors">
                                    <Twitter size={24} fill="#23A6F0" stroke="none"/>
                                </a>
                            </div>

                        </div>
                    </div>
                ))}

            </div>

        </div>
    </div>
    </>
    );
}   