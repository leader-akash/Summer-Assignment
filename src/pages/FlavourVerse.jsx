import shellImg from "../assets/shell.png";
import shell2 from "../assets/shell2.png";

import ellipse from "../assets/Ellipse.png";
import group from "../assets/box35.png";

import food from "../assets/food.png";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const FlavourVerse = () => {
  const [data, setData] = useState();

  const handleData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products?limit=6");
      console.log("res", res);
      setData(res?.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className=" font-bebas flex flex-col items-center bg-orange-50 p-8 mb-4">
      <div className="text-center mt-8">
        <div className="flex items-center">
          <div>
            <img src={shellImg} alt="Logo 3" className="w-[14rem]" />
          </div>
          <h1 className="text-5xl font-bold font-bebas text-[10.5rem] text-[#2E3A45]">
            FLAVOR VERSE
          </h1>
          <img src={shell2} alt="Logo 3" className="w-[14rem]" />
        </div>
        <p className="text-[5.2rem] font-semibold font-bebas text-red-600 mt-[-30px]">
          REVOLT AGAINST MONOTONY!
        </p>
      </div>

      <div>
        <div className="relative mt-32">
          <img src={ellipse} className="w-[52rem]" />

          <img
            src={group}
            className="absolute top-[0] left-[7.5rem] w-[35rem]"
          />

          <div className="font-bold font-bebas text-[3.5rem] absolute bottom-[13rem] left-[15.2rem]">
            35 MEALS, WITH NEW{" "}
          </div>
          <div className="font-bold font-bebas text-[3.5rem] absolute bottom-[9rem] left-[15.6rem]">
            {" "}
            OPTIONS EACH WEEK
          </div>

          <div className="absolute top-[-5rem] left-[24rem]">
            <div className="relative">
              <div className="w-52 h-28">
                <img
                  src={data?.[0]?.image}
                  className="w-full h-full rounded-full flex flex-col items-center"
                  alt="New Image 1"
                />
              </div>
              <span className="absolute text-center bg-white py-1 px-2 rounded-md top-8 right-[-6rem]">
                <span className="text-sm">AT LEAST</span>{" "}
                <span className="text-3xl text-green-500">15</span> &nbsp;
                <span className="font-bold">HIGH PROTEIN</span>
              </span>
            </div>
          </div>
          <div className="absolute top-[10rem] right-[-6rem]">
            <div className="relative">
              <div className="w-52 h-28">
                <img
                  src={data?.[1].image}
                  className="w-full h-full rounded-full"
                  alt="New Image 2"
                />
              </div>
              <span className="absolute text-center bg-white py-1 px-2 rounded-md top-8 right-[-6rem]">
                <span className="text-sm">AT LEAST</span>{" "}
                <span className="text-3xl text-green-500">15</span> &nbsp;
                <span className="font-bold">HIGH PROTEIN</span>
              </span>
            </div>
          </div>

          <div className="absolute bottom-[10rem] right-[-4rem] ">
            <div className="relative">
              <div className="w-52 h-28">
                <img
                  src={data?.[2].image}
                  className="w-full h-full rounded-full"
                  alt="New Image 3"
                />
              </div>{" "}
              <span className="absolute text-center bg-white py-1 px-2 rounded-md top-8 right-[-6rem]">
                <span className="text-sm">AT LEAST</span>{" "}
                <span className="text-3xl text-green-500">15</span> &nbsp;
                <span className="font-bold">HIGH PROTEIN</span>
              </span>
            </div>
          </div>

          <div className="absolute bottom-[-4rem] left-[18rem]">
            <div className="relative">
              <div className="w-52 h-28">
                <img
                  src={data?.[3]?.image}
                  className=" w-full h-full rounded-full"
                  alt="New Image 4"
                />
              </div>
              <span className="absolute text-center bg-white py-1 px-2 rounded-md bottom-8 left-[-6rem]">
                <span className="text-sm">AT LEAST</span>{" "}
                <span className="text-3xl text-green-500">15</span> &nbsp;
                <span className="font-bold">HIGH PROTEIN</span>
              </span>
            </div>
          </div>

          <div className="absolute bottom-[15rem] left-[-5rem] ">
            <div className="relative">
              <div className="w-52 h-28">
                <img
                  src={data?.[4]?.image}
                  className="w-full h-full rounded-full"
                  alt="New Image 4"
                />
              </div>
              <span className="absolute text-center bg-white py-1 px-2 rounded-md bottom-8 left-[-6rem]">
                <span className="text-sm">AT LEAST</span>{" "}
                <span className="text-3xl text-green-500">15</span> &nbsp;
                <span className="font-bold">HIGH PROTEIN</span>
              </span>
            </div>
          </div>

          <div className="absolute top-[3rem] left-[-1rem]">
            <div className="relative">
              <div className="w-52 h-28">
                <img
                  src={data?.[5]?.image}
                  className=" w-full h-full rounded-full"
                  alt="New Image 4"
                />
              </div>
              <span className="absolute text-center bg-white py-1 px-2 rounded-md bottom-8 left-[-6rem]">
                <span className="text-sm">AT LEAST</span>{" "}
                <span className="text-3xl text-green-500">15</span> &nbsp;
                <span className="font-bold">HIGH PROTEIN</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlavourVerse;
