import { useState, useEffect } from "react";
import axios from "axios";
import shellImg from "../assets/shell.png";
import shell2 from "../assets/shell2.png";
import ellipse from "../assets/Ellipse.png";
import group from "../assets/box35.png";
import leftCircle from "../assets/leftCircle.png";
import leftRightCircle from "../assets/leftRightCircle.png";
import rightCircle from "../assets/rightCircle.png";
import icons from "../assets/icons.png";

const FlavourVerse = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products?limit=6");
        setData(res.data);
        console.log('res', res.data)
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    fetchData();
  }, []);

  const renderImageWithLabel = (src, label, position, childPosition) => (
    <div className={`absolute ${position}`}>
      <div className="relative">
        <div className="w-52 h-32">
          <img src={src} className="w-full h-full rounded-full" alt={label} />
        </div>
        <span className={`absolute w-[150px] h-8 text-ellipsis text-center bg-white py-1 px-2 rounded-md ${childPosition} whitespace-nowrap overflow-hidden text-ellipsis`}>
          <span className="text-sm">{label}</span>{" "}
          {/* <span className="text-3xl text-green-500">15</span> &nbsp;
          <span className="font-bold">{label}</span> */}
        </span>
      </div>
    </div>
  );

  return (
    <div className="relative font-bebas flex flex-col items-center p-8 mb-16 mt-20">
      <div className="text-center mt-8 z-10">
        <div className="flex items-center">
          <img src={shellImg} alt="Logo" className="w-[14rem]" />
          <h1 className="font-bold font-bebas text-[10.5rem] text-[#2E3A45]">
            FLAVOR VERSE
          </h1>
          <img src={shell2} alt="Logo" className="w-[14rem]" />
        </div>
        <p className="text-[5.2rem] font-semibold font-bebas text-red-600 mt-[-30px]">
          REVOLT AGAINST MONOTONY!
        </p>
      </div>

      <div className="absolute -top-0 left-0 w-[50rem] h-[40rem]">
        <img src={leftCircle} alt="circle" className="w-full h-full" />
      </div>
      <div className="absolute -top-0 right-10 w-[50rem] h-[40rem]">
        <img src={leftRightCircle} alt="circle" className="w-full h-full" />
      </div>

      <div className="relative">
        <div className="absolute -top-4 -left-64">
          <img src={leftCircle} alt="circle" />
        </div>
        <div className="absolute -bottom-[17rem] -right-64">
          <img src={rightCircle} alt="circle" />
        </div>
        <div className="relative mt-32">
          <img src={ellipse} className="w-[42rem] lg:w-[52rem]" alt="ellipse" />
          <img src={group} className="absolute top-[0]  left-[5rem] lg:left-[7.5rem]  w-[28rem]  lg:w-[35rem]" alt="group" />

          <div className="font-bold font-bebas text-[3rem] lg:text-[3.5rem] absolute bottom-[11rem] lg:bottom-[13rem] left-[11rem] lg:left-[15.2rem]">
            35 MEALS, WITH NEW{" "}
          </div>
          <div className="font-bold font-bebas text-[2.8rem] lg:text-[3.5rem] absolute bottom-[8rem] lg:bottom-[9rem] left-[12rem] lg:left-[15.6rem]">
            {" "}
            OPTIONS EACH WEEK
          </div>

          {data.length > 0 && (
            <>
              {renderImageWithLabel(data[0]?.image, data[0]?.title, 'top-[-5rem] left-[24rem]', 'top-8 right-[-6rem]')}
              {renderImageWithLabel(data[1]?.image, data[1]?.title, 'top-[10rem] right-[-6rem]', 'top-8 right-[-6rem]')}
              {renderImageWithLabel(data[2]?.image, data[2]?.title, 'bottom-[10rem] right-[-4rem]', 'top-8 right-[-6rem]')}
              {renderImageWithLabel(data[3]?.image, data[3]?.title, 'bottom-[-4rem] left-[18rem]', ' bottom-8 left-[-6rem]')}
              {renderImageWithLabel(data[4]?.image, data[4]?.title, 'bottom-[15rem] left-[-5rem]', ' bottom-8 left-[-6rem]')}
              {renderImageWithLabel(data[5]?.image, data[5]?.title, 'top-[3rem] left-[-1rem]', ' bottom-8 left-[-6rem]')}
              
            </>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center space-y-4 justify-center !ml-10 mt-32 z-20">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex justify-center md:justify-normal space-x-4">
            <div className="size-14">
              <img src={icons} alt="icons" className="size-full" />
            </div>
            <div className="text-xl md:text-4xl font-extralight w-[390px]">
              BEACH BODY FOOD TO{" "}
              <span className="block">HELP YOU LOOK YOUR</span>
              <span className="block">BEST</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavourVerse;
