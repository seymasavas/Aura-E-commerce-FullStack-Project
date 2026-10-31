import { Link } from "react-router-dom";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center w-[240px] bg-white hover:shadow-lg transition-shadow duration-300 group">
      {/* Ürün Resmi */}
      <Link
        to={`/shop/${product.id}/${product.name || product.title}`}
        className="w-full h-[300px] overflow-hidden relative block"
      >
        <img
          src={product.images?.[0]?.url || product.image}
          alt={product.name || product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Ürün Detayları */}
      <div className="flex flex-col items-center gap-[10px] pt-[25px] px-[25px] pb-[35px] w-full">
        <h5 className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#252B42] text-center truncate w-full">
          <Link to={`/shop/${product.id}/${product.name || product.title}`}>
            {product.name || product.title}
          </Link>
        </h5>

        <div className="flex gap-[5px] py-[5px] px-[3px]">
          <span className="font-['Montserrat'] font-bold text-[16px] text-[#23856D]">
            ${product.price}
          </span>
        </div>

        {/* Renk Seçenekleri */}
        <div className="flex items-center gap-[6px] mt-1">
          <span className="w-[16px] h-[16px] rounded-full bg-[#23A6F0] cursor-pointer"></span>
          <span className="w-[16px] h-[16px] rounded-full bg-[#23856D] cursor-pointer"></span>
          <span className="w-[16px] h-[16px] rounded-full bg-[#E77C40] cursor-pointer"></span>
          <span className="w-[16px] h-[16px] rounded-full bg-[#252B42] cursor-pointer"></span>
        </div>
      </div>
    </div>
  );
}
