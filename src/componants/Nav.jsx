import { useState } from "react";
import "./main.css";
import { BsListNested } from "react-icons/bs";
import hero from "../assets/streetsuite.png";
import img2 from "../assets/a-l-l-e-f-v-i-n-i-c-i-u-s-343875-unsplash.png";
const Nav = () => {
  const [bar, setBar] = useState(false);
  return (
    <>
      <div className="hidden lg:flex justify-between items-center mx-[19px] rounded-[15px] h-[96px] bg-primaryColor mt-[18px] mb-[10px]">
        <div className="flex flex-col justify-center items-center relative flex-1 before">
          <p className="text-[#9089DC] bg-[#554DB7] rounded-[12px] text-[15px] w-fit px-[5px] text-center absolute top-2">
            coming soon
          </p>
          <h3 className=" text-[35px] xl:text-[48px] leading-[104.5px] text-[#484848]">
            Trading
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center relative flex-1 before">
          <p className="text-[#9089DC] bg-[#554DB7] rounded-[12px] text-[15px] w-fit px-[5px] text-center absolute top-2">
            coming soon
          </p>
          <h3 className=" text-[35px] xl:text-[48px] leading-[104.5px] text-[#484848]">
            Trading
          </h3>
        </div>
        <div className="flex flex-col border-r-1 justify-center items-center relative flex-1 before">
          <p className="text-[#9089DC] bg-[#554DB7] rounded-[12px] text-[15px] w-fit px-[5px] text-center absolute top-2">
            coming soon
          </p>
          <h3 className=" text-[35px] xl:text-[48px] leading-[104.5px] text-[#484848]">
            Trading
          </h3>
        </div>
        <div className="flex flex-col border-r-1 justify-center items-center flex-1 relative before">
          <h3 className=" text-[35px] xl:text-[48px] leading-[104.5px] text-[#FFFFFF]">
            Alerts
          </h3>
        </div>
        <div className="flex flex-col border-r-1 justify-center items-center flex-1">
          <h3 className=" text-[35px] xl:text-[48px] leading-[104.5px] text-[#484848]">
            Training
          </h3>
        </div>
      </div>

      <div className="lg:hidden z-10">
        <BsListNested
          onClick={() => setBar((prev) => !prev)}
          className="mx-[15px] text-gray-400 hover:text-white my-[10px] text-[35px] px-2 py-1 border border-gray-400 hover:border-white cursor-pointer rounded"
        />
        <div
          className="side text-white rounded bg-[#000] absolute z-20 top-0 md:w-[50%] w-[70%] h-[100%]"
          style={{
            clipPath: `${
              bar
                ? "polygon(100% 0, 0 0, 0 100%, 100% 100%)"
                : "polygon(0 0, 0 0, 0 100%, 0 100%)"
            }`,
            transition: "1s",
          }}
        >
          <div className="h-[51px] relative z-10 flex justify-between">
            <img
              src={hero}
              alt=""
              className="m-0 absolute left-[-30px] top-[50%] transform translate-y-[-50%]"
            />
            <BsListNested
              onClick={() => setBar((prev) => !prev)}
              className=" absolute top-[-3px] right-[0px] text-gray-400 hover:text-white my-[10px] text-[35px] px-2 py-1 border border-gray-400 hover:border-white cursor-pointer rounded"
            />
          </div>
          <div className=" text-[#5D5D5D] text-center hover:text-white p-1 outline hover:outline-white hover:outline-2 rounded cursor-pointer transition-all duration-300">
            Alert
          </div>
          <div className=" text-[#5D5D5D] text-center hover:text-white p-1 outline hover:outline-white hover:outline-2 rounded cursor-pointer transition-all duration-300">
            Training
          </div>
          <div className=" text-[#5D5D5D] text-center hover:text-white p-1 outline hover:outline-white hover:outline-2 rounded cursor-pointer transition-all duration-300">
            AUtomation
          </div>
          <div className=" text-[#5D5D5D] text-center hover:text-white p-1 outline hover:outline-white hover:outline-2 rounded cursor-pointer transition-all duration-300">
            Portfolio
          </div>
          <div className=" text-[#5D5D5D] text-center hover:text-white p-1 outline hover:outline-white hover:outline-2 rounded cursor-pointer transition-all duration-300">
            Trading
          </div>
          <div className=" absolute bottom-[30px] right-[50%] transform translate-x-[50%] w-[90%]">
            <div className="flex items-center justify-center gap-[20px]">
              <div className="w-[50px] h-[52px] bg-white rounded-full flex justify-center items-center">
                <img src={img2} alt="" className="w-[44px] h-[44px]" />
              </div>
              <div className="text-[#404040]">
                <p className="text-white">Moni Roy</p>
                <p className="text-[#979797]">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
