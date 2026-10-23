import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HomeProductCard() {
  const categories = useSelector((state) => state.product.categories || []);
  const top5Categories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  if (top5Categories.length === 0) return null;

  return (
    <div className="w-full bg-white font-sans">
      <div className="container mx-auto px-4 lg:px-0 lg:max-w-[1124px] py-20 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-[10px] text-center max-w-[692px]">
          <h4 className="hidden lg:block font-normal text-xl text-[#737373]">
            Featured Categories
          </h4>
          <h3 className="font-bold text-2xl text-[#252B42]">TOP 5 KATEGORİ</h3>
          <p className="font-normal text-sm text-[#737373]">
            En yüksek puan alan favori kategorilerimiz
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[30px] w-full">
          {top5Categories.map((category) => (
            <div
              key={category.id}
              className="flex-col items-center w-full max-w-[295px] lg:max-w-[183px] flex"
            >
              <Link
                to={`/shop/${category.gender === "k" ? "kadin" : "erkek"}/${category.title.toLowerCase().replace(/\s+/g, "-")}/${category.id}`}
                className="w-full h-[360px] lg:h-[238px] mb-[25px] block"
              >
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity rounded-md shadow-sm"
                />
              </Link>

              <div className="flex flex-col items-center gap-[10px] pb-[35px]">
                <h5 className="font-bold text-base text-[#252B42] text-center uppercase">
                  <Link
                    to={`/shop/${category.gender === "k" ? "kadin" : "erkek"}/${category.title.toLowerCase().replace(/\s+/g, "-")}/${category.id}`}
                  >
                    {category.title}
                  </Link>
                </h5>
                <span className="font-bold text-sm text-[#737373]">
                  Puan: {category.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeProductCard;
