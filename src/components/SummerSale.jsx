import beach from "../assets/beach.png";
import item from "../assets/plate.png";
import item2 from "../assets/plate-2.png";
import icons from "../assets/icons.png";
import item3 from "../assets/item3.png";
import beachChair from "../assets/beachChair.png";
import chicken from "../assets/chicken.png";
import footerImg from "../assets/footer.png";
import fLogo1 from "../assets/fLogo1.png";
import fLogo2 from "../assets/fLogo2.png";
import fLogo3 from "../assets/fLogo3.png";
import fLogo4 from "../assets/fLogo4.png";
import fLogo5 from "../assets/fLogo5.png";
import fLogo6 from "../assets/fLogo6.png";
import arrow from "../assets/Vector.svg";


const SummerPrepSale = () => {
  const footerLogos = [fLogo1, fLogo2, fLogo3, fLogo4, fLogo5, fLogo6];

  return (
    <div>
      <div className="min-h-screen bg-custom-bg bg-no-repeat h-full">
        <div className="flex justify-between">
          <div className="ml-10 md:ml-20 md:mt-24 py-8 text-[#2E3A45]">
            <h1 className="text-2xl md:text-[112px]   text-[50px]">
              <span className="text-[#F54400]">SUMMER</span> PREP SALE!
            </h1>
            <p className="text-lg md:text-[90px] font-medium mt-12 flex items-center">
              GET
              <span className=" rounded-xl py-8 px-5  mx-2  text-white bg-green-700 ">
                {" "}
                40%{" "}
              </span>{" "}
              OFF YOUR
              <span className="rounded-2xl bg-orange-500 ml-2 text-sm md:text-[42px] text-white py-6 px-3">
                 <span className="font-semibold">1ST</span> ORDER
              </span>
            </p>
            <button className="bg-[#FE4700] flex space-x-2 items-center text-base md:text-[36px] text-white py-4 px-4 mt-6 rounded">
                <p>
              CHOOSE MY MEALS
                </p>
                <div>
                    <img src={arrow} alt="arrow"/>
                </div>
            </button>
          </div>
        
        </div>

        <div className="">
          <div className="-mt-40 opacity-25 lg:opacity-100">
            <img src={item} alt="items" />
          </div>
        </div>

        <div className="relative text-black -mt-20 md:-mt-52">
          <div className=" relative z-50">
            <div className="flex justify-center md:ml-64 items-center space-x-2">
              <div className="size-14 object-contain">
                <img src={icons} alt="icons" className="size-full" />
              </div>
              <p className="text-xl md:text-2xl font-medium w-[390px] ">
                TARGET YOUR TASTE BUDS,{" "}
                <span className="block"> WHILE WE BALANCE THE MACROS </span>
              </p>
            </div>

            <div className="flex justify-center mt-10 md:mt-24 md:mr-20 items-center space-x-2">
              <div className="size-14">
                <img src={icons} alt="icons" className="size-full" />
              </div>
              <p className="text-xl md:text-2xl font-medium w-[390px] ">
                FRESH MEALS AS LOW AS{" "}
                <span className="block text-[#00B67A]">$5.90 EACH</span>
              </p>
            </div>

            <div className="flex justify-center md:justify-normal mt-10 md:mt-24 md:ml-72 items-center space-x-2">
              <div className="size-14 ">
                <img src={icons} alt="icons" className="size-full" />
              </div>
              <p className="text-xl md:text-2xl font-medium w-[390px] ">
                ACHIEVE SUMMER BODY GOALS{" "}
                <span className="block text-[#00B67A]">THE DELICIOUS WAY</span>
              </p>
            </div>
          </div>

          <div className="absolute -top-40 xl:-right-16 z-0 opacity-25 lg:opacity-100">
            <img src={item2} alt="item" />
          </div>
        </div>

        <div className="-mt-8 md:mr-0  xl:mr-16 flex justify-center opacity-25 lg:opacity-100">
          <div>
            <img src={item3} alt="item" />
          </div>
        </div>
      </div>

      <div className="relative -mt-28 z-0">
        <div >
          <img src={beach} alt="beach" className="opacity-20 md:opacity-100"/>
        </div>
        <div className="absolute -top-[310px] left-16">
          <img src={beachChair} alt="beachChair" />
        </div>
        <div className="absolute -top-8 left-[400px]">
          <img src={chicken} alt="chicken" />
        </div>
      </div>

      <div className=" hidden md:visible md:flex relative justify-center">
        <div className=" -mt-24 z-10">
          <img src={footerImg} alt="footer" className="z-50" />
        </div>
        <div className=" absolute -top-32 md:-top-24 lg:-top-20 xl:-top-10 z-50 flex justify-center">
          {footerLogos.map((el) => (
            <img key={el} src={el} alt={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummerPrepSale;
