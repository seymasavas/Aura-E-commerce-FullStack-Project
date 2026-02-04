
import { Play } from 'lucide-react';
import aboutvideoimage from '../../assets/aboutvideoimage.jpg';


export default function AboutVideo() {
    return (
        <>
        <div className="w-full bg-white font-['Montserrat']">
      
      <div className="container mx-auto px-4 py-[80px] lg:py-[112px] flex justify-center">
        
        <div className="relative w-full max-w-[307px] lg:max-w-[989px] h-[316px] lg:h-[540px] rounded-[13px] lg:rounded-[20px] overflow-hidden shadow-lg group">
            
            <img 
                src={aboutvideoimage} 
                alt="Team Video" 
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(56,56,56,0.84)] opacity-90"></div>

            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                               w-[57px] h-[57px] lg:w-[93px] lg:h-[93px] 
                               bg-[#23A6F0] rounded-full flex items-center justify-center 
                               hover:scale-110 hover:bg-blue-500 transition-all duration-300 shadow-md">
                
                
                <Play 
                    className="text-white w-[12px] h-[14px] lg:w-[22px] lg:h-[28px] ml-1" 
                    fill="white" 
                    strokeWidth={7}
                />
            </button>

        </div>

      </div>
    </div>
        </>
    )
}   