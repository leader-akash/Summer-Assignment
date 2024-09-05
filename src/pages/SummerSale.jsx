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
import footerUp from "../assets/footer-up.png";
import footerDown from "../assets/footer-down.png";



const SummerPrepSale = () => {
  const footerLogos = [fLogo1, fLogo2, fLogo3, fLogo4, fLogo5, fLogo6];

  return (
    <div>
      <div className="min-h-screen  h-full bg-custom-image">
        <div className="flex justify-between ">
          <div className="ml-10 md:ml-[84px] md:mt-[90px] py-8 text-[#2E3A45]">
            <h1 className="text-2xl md:text-[112px]   text-[50px]">
              <span className="text-[#F54400]">SUMMER</span> PREP SALE!
            </h1>
            <p className="text-lg md:text-[90px] font-medium mt-11 flex items-center">
              GET
              <span className=" rounded-xl py-9 px-5  mx-2  text-white bg-[#1F7318] ">
                {" "}
                40%{" "}
              </span>{" "}
              OFF YOUR
              <span className="rounded-2xl bg-orange-500 ml-2 text-sm md:text-[42px] text-white py-6 px-4">
                <span className="font-semibold">1ST</span> ORDER
              </span>
            </p>
            <button className="bg-[#FE4700] flex space-x-2 items-center text-base md:text-[36px] text-white py-4 px-4 mt-6 rounded">
              <p>CHOOSE MY MEALS</p>
              <div>
                <img src={arrow} alt="arrow" />
              </div>
            </button>
          </div>
        </div>

        <div className="">
          <div className="-mt-36 size-[800px] opacity-25 lg:opacity-100">
            <img src={item} alt="items" className="size-full" />
          </div>
        </div>

        <div className="relative text-black -mt-20 md:-mt-52">
          <div className=" relative z-50">
            <div className="flex justify-center md:ml-64 items-center space-x-10">
              <div className="size-14 object-contain">
                <img src={icons} alt="icons" className="size-full" />
              </div>
              <p className="text-xl md:text-4xl font-medium w-[390px] ">
                TARGET YOUR TASTE BUDS,{" "}
                <span className="block"> WHILE WE BALANCE THE MACROS </span>
              </p>
            </div>

            <div className="flex justify-center mt-10 md:mt-24 md:mr-20 items-center space-x-10">
              <div className="size-14">
                <img src={icons} alt="icons" className="size-full" />
              </div>
              <p className="text-xl md:text-4xl  w-[390px] ">
                FRESH MEALS AS LOW AS{" "}
                <span className="block text-[#00B67A]">$5.90 EACH</span>
              </p>
            </div>

            <div className="flex justify-center md:justify-normal mt-10 md:mt-24 md:ml-72 items-center space-x-10">
              <div className="size-14 ">
                <img src={icons} alt="icons" className="size-full" />
              </div>
              <p className="text-xl md:text-4xl font-medium w-[390px] ">
                ACHIEVE SUMMER BODY GOALS{" "}
                <span className="block text-[#00B67A]">THE DELICIOUS WAY</span>
              </p>
            </div>
          </div>

          <div className="absolute -top-40 md:-right-16 z-0 opacity-25 lg:opacity-100">
            <img src={item2} alt="item" />
          </div>
        </div>

        <div className="-mt-8 md:mr-0  md:mr-16 flex justify-center opacity-25 lg:opacity-100">
          <div>
            <img src={item3} alt="item" />
          </div>
        </div>
      </div>

      <div className="relative -mt-28 z-0">
        <div className="w-[100vw]">
          <img
            src={beach}
            alt="beach"
            className="w-full opacity-20 md:opacity-100"
          />
        </div>
        <div className="absolute -top-[310px] left-16">
          <img src={beachChair} alt="beachChair" />
        </div>
        <div className="absolute -top-8 left-[400px] z-20">
          <img src={chicken} alt="chicken" className="relative z-20" />
        </div>
      </div>
      <div className="relative h-[120px] flex items-center bg-[#FD8C07] justify-center">
        <div className="z-50  flex justify-center">
          {footerLogos.map((el) => {
            return (
              <div key={el} className="">
                <img key={el} src={el} alt={el} />
              </div>
            );
          })}
        </div>
        <div className="absolute hidden lg:block lg:-top-16 xl:-top-[5rem] 2xl:-top-[6rem] w-[100vw] z-100">
          <img src={footerUp} alt="footer" className="w-full"/>
        </div>
        <div className="absolute hidden lg:block lg:-bottom-10   xl:-bottom-[3rem] 2xl:-bottom-[4rem] w-[100vw] ">
          <img src={footerDown} alt="footer" className="w-full"/>

        </div>
      </div>

    </div>
  );
};

export default SummerPrepSale;
