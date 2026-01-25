import { Link } from "react-router-dom";
import model from "../assets/model.png"; 

function Hero() {
  return (
    <div className="w-auto lg:mx-[50px] mx-[20px] lg:mt-[20px] lg:h-[622px] h-[902px] flex flex-col justify-center items-center lg:flex-row font-sans rounded-[20px] bg-gradient-to-r from-[#96E9FB] to-[#ABECD6]">
     
      <div className="flex flex-col items-center justify-center lg:items-start lg:m-[80px] lg:w-[518px] mt-[60px]">
        <h5 className="w-[122px] h-[24px] font-[700] mt-[24px] text-base leading-[24px] tracking-[0.1px] text-blue-500">
          SUMMER 2026
        </h5>
        <h2 className="lg:hidden items-center flex justify-center w-[308px] h-[100px] font-[700] mt-[35px] text-4xl leading-[50px] tracking-[0.2px] text-black">
          NEW COLLECTION
        </h2>
        <h1 className="hidden lg:flex w-[600px] h-[50px] font-[700] mr-[35px] mb-[35px] mt-[35px] text-[58px] leading-[80px] tracking-[0.2px] text-black">
          NEW COLLECTION
        </h1>
        <h4 className="w-[291px] h-[90px] lg:w-[380px] lg:h-[55px] font-normal mt-[32px] text-xl leading-[30px] tracking-[0.2px] text-[#737373] font-sans">
          We know how large objects will act, but things on a small scale.
        </h4>
        <Link to="/shop">
          <button className="h-[62px] mt-[32px] rounded-[5px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] gap-[10px] bg-[#23A6F0] tracking-[0.1px] leading-[32px] text-2xl font-[700] text-white">
            SHOP NOW
          </button>
        </Link>
      </div>

  
      <div className="w-full flex relative h-[453px] lg:h-[619px] mt-[40px]">
        <div className="absolute w-[8.98px] h-[8.98px] left-[300.15px] top-[74.6px] lg:w-[12.4px] lg:h-[12.4px] lg:left-[835.15px] lg:top-[30.6px] bg-[#977DF4] rounded-full"></div>
        <div className="absolute w-[18.4px] h-[18.4px] left-[305.15px] top-[230.6px] z-50 lg:w-[28.4px] lg:h-[28.4px] lg:left-[725.15px] lg:top-[220.6px] bg-white rounded-full"></div>
        <div className="absolute w-[40.4px] h-[40.4px] left-[20.15px] top-[30.6px] lg:w-[58.4px] lg:h-[58.4px] lg:left-[285.15px] lg:top-[30.6px] bg-white rounded-full"></div>
        <div className="absolute w-[270.4px] h-[270.4px] left-[40.15px] top-[70.6px] lg:w-[480.4px] lg:h-[480.4px] lg:left-[325.15px] lg:top-[-30.6px] bg-white rounded-full"></div>
        <img
          src={model}
          className="absolute w-[430px] h-[330px] lg:w-[769px] lg:h-[599px] z-10 top-[73.77px] lg:top-[2px] lg:left-[100px] object-cover lg:object-fill"
          alt="hero-model"
        />
      </div>
    </div>
  );
}

export default Hero;