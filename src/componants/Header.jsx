import hero from "../assets/streetsuite.png";
import { BsSearch } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";
import img2 from "../assets/a-l-l-e-f-v-i-n-i-c-i-u-s-343875-unsplash.png";

const Header = () => {
  return (
    <div className="flex items-center px-[22px] mt-[18px] ">
      <div className="h-[60px] xl:h-[71px] hidden">
        <img src={hero} alt="" className=" lg:block " />
      </div>
      <div className="flex-row bg-primaryColor rounded-[19px] flex-1 p-[7px] gap-2 flex items-center justify-between">
        <div className="lg:px-[17px] px-[15px] py-[9px] flex items-center gap-[10px] lg:gap-[3px] bg-white rounded-[19px] w-[100%] mb-2">
          <BsSearch />
          <input
            type="text"
            placeholder="Search"
            className="border-none outline-none"
          />
        </div>
        <div className="flex items-center gap-1 lg:gap-2">
          <BsBellFill className="text-[#554DB7]" />
          <div className="hidden lg:flex items-center gap-[5px] lg:gap-[23px]">
            <div className="xl:w-[50px] xl:h-[52px] w-[45px] h-[45px] bg-white rounded-full overflow-hidden flex justify-center items-center">
              <img src={img2} alt="" className="w-[44px] h-[44px]" />
            </div>
            <div className="text-[#404040]">
              <p>ahmed</p>
              <p>admin</p>
            </div>
            <BsArrowDownShort className="border rounded-full border-[#5C5C5C] text-[#565656]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
