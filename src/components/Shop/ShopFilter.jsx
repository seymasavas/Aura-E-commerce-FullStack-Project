export default function ShopFilter() {
  return (
    <div className="w-full bg-white py-6">
      
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-[1088px] mx-auto">

          <div className="font-['Montserrat'] font-bold text-[14px] text-[#737373]">
            Showing all 12 results
          </div>

          <div className="flex items-center gap-[15px]">
            <span className="font-['Montserrat'] font-bold text-[14px] text-[#737373]">
              Views:
            </span>
            <div className="flex gap-[15px]">

               <button className="w-[46px] h-[46px] flex items-center justify-center border border-[#ECECEC] rounded-[5px] hover:bg-gray-100 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1 1H7V7H1V1ZM9 1H15V7H9V1ZM1 9H7V15H1V9ZM9 9H15V15H9V9Z" fill="#252B42"/>
                  </svg>
               </button>

               <button className="w-[46px] h-[46px] flex items-center justify-center border border-[#ECECEC] rounded-[5px] hover:bg-gray-100 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" clipRule="evenodd" d="M1 2H15V4H1V2ZM1 7H15V9H1V7ZM1 12H15V14H1V12Z" fill="#737373"/>
                  </svg>
               </button>
            </div>
          </div>

          <div className="flex items-center gap-[15px]">
            <div className="relative">
                <select className="h-[50px] pl-[18px] pr-[35px] bg-[#F9F9F9] border border-[#DDDDDD] rounded-[5px] font-['Montserrat'] text-[14px] text-[#737373] focus:outline-none focus:border-[#23A6F0] appearance-none cursor-pointer">
                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                </select>
                <div className="absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1L5 5L9 1" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <button className="h-[50px] px-[20px] bg-[#23A6F0] text-white font-['Montserrat'] font-bold text-[14px] rounded-[5px] hover:bg-[#1a8cd8] transition-colors">
              Filter
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}