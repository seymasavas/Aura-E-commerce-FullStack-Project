import {  Heart, Instagram, LucideFacebook, LucideMenu, LucideYoutube, MailIcon, PhoneIcon, Search, ShoppingCart, Twitter, UserIcon} from "lucide-react";
import { Link } from "react-router-dom";
import model from "../assets/model.png";

function Header(){





    return (
      <header className=" w-full h-[1402px] lg:h-[830px] ">
        <div className="hidden lg:flex h-[58px] bg-[#252B42] font-sans items-center justify-between">
          <div className="w-full flex ">
            <div className=" h-[46px] gap-[10px] flex items-center">
              <div className=" items-center flex items-center rounded-[5px] p-[10px] gap-[5px]">
                <PhoneIcon className="w-[16px] h-[16px] text-white"/>
                <h6 className="w-[104px] h-[24px] font-[700] text-sm leading-[24px] tracking-[0.2px] text-white"> (225) 555-0118</h6>
              </div>
              <div className=" items-center flex rounded-[5px] p-[10px] gap-[5px] ">
                <MailIcon className="w-[16px] h-[16px] text-white"/>
                <h6 className=" font-[700] text-sm leading-[24px] tracking-[0.2px] text-white">michelle.rivera@example.com</h6>
              </div>
              <div className="flex w-[600px] justify-end p-[10px] gap-[10px] ">
                <h6 className=" font-[700] text-sm leading-[24px] tracking-[0.2px] justify-center text-white">Follow Us  and get a chance to win 80% off</h6>
              </div>
              <div className="w-[550px] items-center justify-end flex gap-[10px]">
                <h6 className="font-[700] text-sm leading-[24px] tracking-[0.2px] justify-end flex text-white">Follow Us :</h6>
                <div className="w-[120px] h-[26px] flex flex-row justify-end">
                  <Instagram className="p-[5px] gap-[10px] text-white"/>
                  <LucideYoutube className="left-[31.5px] p-[5px] gap-[10px] text-white"/>
                  <LucideFacebook className="left-[61.5px] p-[4px] gap-[16px] rounded-full text-white"/>
                  <Twitter className=" left-[31.5px] p-[5px] gap-[10px] text-white"/>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div className="w-full top-[70px] bg-white">
          <div className="flex w-full ">
                <div className=" w-full px-[35px] h-[58px] top-[43px] flex items-center"  >
                  <h3 className=" w-[145px] h-[32px] top-[13px] font-sans 
                  font-[700] text-3xl leading-[32px] tracking-[0.1px] decoration-black flex justify-start">Aura</h3>
                  <div className="w-full h-[58px]  left-[265px] hidden lg:flex flex-row items-center ">
                    <nav className=" flex-row items-center flex gap-[20px] font-sans font-[700] leading-[24px] tracking-[0.2px] text-sm text-[#737373]">
                      <Link className=" ">Home</Link>
                      <Link className="">Shop</Link>
                      <Link className="">About</Link>
                      <Link className="">Blog</Link>
                      <Link className="">Contact</Link>
                      <Link className="">Pages</Link>
                    </nav>
                    <div className="w-full flex flex-row justify-end top-[2px] gap-[30px] font-sans font-[700] leading-[24px] tracking-[0.2px] text-sm text-[#23A6F0]">
                      <Link to="/login" className="hidden lg:flex flex-row justify-around gap-[10px]"><UserIcon/>Login / Register</Link>
                      <Search  />
                      <ShoppingCart />
                      <Heart/>
                    </div>

                  </div>
                </div>

                <div className="flex items-center gap-[25px] lg:hidden text-[#737373] w-[1437px] h-[58px] ">
                  <Search className="w-[24px]  "/>
                  <ShoppingCart className="w-[24px] "/>
                  <LucideMenu className="w-[24px] "/>
               </div>
          </div>
          <nav className="lg:hidden h-[330px] flex flex-col items-center justify-center  mt-[84px] px-[145px] gap-[30px] font-sans
          font-[500] text-3xl  leading-[45px] tracking-[0.2 px] text-gray-500">
            <Link to="/" className="hover:text-[#252B42]">Home</Link>
            <Link to="/productlist" >Product</Link>
            <Link to="/pricing" >Pricing</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div className=" w-auto ve lg:mx-[50px] mx-[20px] lg:mt-[70px] lg:h-[622px] h-[902px]
 flex flex-col justify-center items-center lg:flex-row font-sans rounded-[20px]  bg-gradient-to-r from-[#96E9FB] to-[#ABECD6]">
          <div className=" flex flex-col  items-center justify-center lg:items-start lg:m-[80px] lg:w-[518px] mt-[60px]">
            <h5 className="w-[122px] h-[24px] font-[700] mt-[24px] text-base leading-[24px] tracking-[0.1 px] text-blue-500 ">SUMMER 2026</h5>
            <h2 className="lg:hidden items-center flex justify-center w-[308px] h-[100px] font-[700] mt-[35px] text-4xl leading-[50px] tracking-[0.2 px] text-black ">NEW COLLECTION</h2>         
            <h1 className="hidden lg:flex w-[600px] h-[50px] font-[700] mr-[35px] mb-[35px] mt-[35px] text-[58px] leading-[80px] tracking-[0.2 px] text-black ">NEW COLLECTION</h1>         
            <h4 className="w-[291px] h-[90px] lg:w-[380px] lg:h-[55px] font-normal mt-[32px] text-xl leading-[30px] tracking-[0.2px] text-[#737373] font-sans ">We know how large objects will act, but things on a small scale.</h4>
            <Link to="/shop"><button className=" h-[62px] mt-[32px] rounded-[5px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] gap-[10px] bg-[#23A6F0] tracking-[0.1 px] leading-[32px] text-2xl font-[700] text-white">SHOP NOW </button></Link>
          </div>
          <div className="w-full flex relative h-[453px] lg:h-[619px] mt-[40px]">
            <div className="absolute w-[8.98px] h-[8.98px] left-[300.15px] top-[74.6px] lg:w-[12.4px] lg:h-[12.4px] lg:left-[835.15px] lg:top-[30.6px] bg-[#977DF4] rounded-full"> </div>
            <div className="absolute w-[18.4px] h-[18.4px] left-[305.15px] top-[230.6px] z-50 lg:w-[28.4px] lg:h-[28.4px] lg:left-[725.15px] lg:top-[220.6px] bg-white rounded-full"> </div>
            <div className="absolute w-[40.4px] h-[40.4px] left-[20.15px] top-[30.6px] lg:w-[58.4px] lg:h-[58.4px] lg:left-[285.15px] lg:top-[30.6px] bg-white rounded-full"> </div>
            <div className="absolute w-[270.4px] h-[270.4px] left-[40.15px] top-[70.6px] lg:w-[480.4px] lg:h-[480.4px] lg:left-[325.15px] lg:top-[-30.6px] bg-white rounded-full"> </div>
            <img src={model} className=" absolute w-[430px] h-[330px]  lg:w-[769px] lg:h-[599px] z-10 top-[73.77px] lg:top-[2px] lg:left-[100px] object-cover lg:object-fill"/>

          </div>
        </div>
       </header>
    )
}
export default Header;