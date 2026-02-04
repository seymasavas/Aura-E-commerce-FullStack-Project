import teamMember1 from '../../assets/teammember1.jpg';
import teamMember2 from '../../assets/teammember2.jpg';
import teamMember3 from '../../assets/teammember3.jpg';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function AboutTeam() {
    const members = [
    { id: 1, name: "username", job: "Profeession", image: teamMember1 }, 
    { id: 2, name: "username", job: "Profeession", image: teamMember2 }, 
    { id: 3, name: "username", job: "Profeession", image: teamMember3 }, 
  ];

  return (
    <div className="w-full bg-white font-['Montserrat']">
      
      <div className="container mx-auto px-6 py-[30px]">
        
        <div className="flex flex-col items-center text-center gap-[5px] mb-[112px]">
            <h2 className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">
                Meet Our Team
            </h2>
            <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] max-w-[469px]">
                Problems trying to resolve the conflict between 
                the two major realms of Classical physics: Newtonian mechanics 
            </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-[30px]">
            
            {members.map((member) => (
                
                <div key={member.id} className="flex flex-col items-center w-full max-w-[316px] h-auto bg-white shadow-none">
                    
                    <div className="w-full h-[231px] overflow-hidden">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
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
                            <a href="#" className="text-[#23A6F0] hover:text-blue-600 transition-colors">
                                <Facebook size={24} fill="#23A6F0" stroke="none"/>
                            </a>
                            <a href="#" className="text-[#23A6F0] hover:text-blue-600 transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-[#23A6F0] hover:text-blue-600 transition-colors">
                                <Twitter size={24} fill="#23A6F0" stroke="none"/>
                            </a>
                        </div>

                    </div>
                </div>
            ))}

        </div>

      </div>
    </div>
  );
}
