import React from 'react';

export default function AboutStats() {
  
  const stats = [
    { number: "15K", title: "Happy Customers" },
    { number: "150K", title: "Monthly Visitors" },
    { number: "15", title: "Countries Worldwide" },
    { number: "100+", title: "Top Partners" },
  ];

  return (
    <div className="w-full bg-white font-['Montserrat']">
      
      <div className="container mx-auto px-4 py-[120px]">
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[100px] lg:gap-[100px]">
            
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center w-[230px]">
                    
                    <h1 className="font-bold text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42]">
                        {stat.number}
                    </h1>
                    
                    <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#737373] text-center">
                        {stat.title}
                    </h5>
                    
                </div>
            ))}

        </div>
      </div>
    </div>
  );
}