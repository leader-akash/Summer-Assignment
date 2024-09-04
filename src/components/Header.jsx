import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className='relative'>
      <div className='bg-[#BBC849] flex justify-between items-center p-4 z-10'>
        <div className='w-24 h-8 md:w-32 md:h-10 z-50'>
          <img src={logo} alt="logo" className='w-full h-full'/>
        </div>
        <button className='z-50 md:w-[160px] md:h-[56px] bg-white text-black text-base'>Get in touch</button>
      </div>
      <div className='absolute top-[65%] left-0 w-full flex z-0'>
        {/* Create a row of circles */}
        {Array.from({ length: 22 }).map((_, index) => (
          <div key={index} className='size-[5vw] bg-[#BBC849] rounded-full '></div>
        ))}
      </div>
    </div>
  );
};

export default Header;
