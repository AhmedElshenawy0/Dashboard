import { useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";

const Filter = () => {
  const [dropDown, setDropDown] = useState(true);
  return (
    <div className=" bg-secondaryColor rounded-[15px] py-[25px] pr-[16px] pl-[27px] w-[100%] lg:w-[300px] xl:basis-[360px]">
      <h2 className="text-center text-[#FFFFFF] text-[32px] font-bold">
        Filters
      </h2>
      <div className="flex flex-col justify-center gap-[8px] mb-[22px]">
        <p className="text-[#FFFFFF] text-[14px] leading-[20px] font-medium">
          Industry
        </p>
        <div className="p-[12px] flex gap-[16px] outline outline-1 outline-[#D6D6D6] rounded-[8px] hover:outline-2 focus:outline-[#FFFFFF]">
          <span className="text-[#6B6B6B] w-[16.25px]">#</span>
          <input
            type="text"
            placeholder="Health care."
            className="bg-transparent border-none outline-none text-[#A3A3A3]"
          />
        </div>
        <p className="text-[#6B6B6B]">Choosing something.</p>
      </div>
      <div className="flex flex-col justify-center gap-[8px] mb-[23px]">
        <p className="text-[#FFFFFF] text-[14px] leading-[20px] font-medium">
          Market Cap
        </p>
        <div className="p-[12px] flex gap-[16px] outline outline-1 outline-[#D6D6D6] rounded-[8px] hover:outline-2 hover:outline-[#FFFFFF]">
          <span className="text-[#6B6B6B] w-[16.25px]">#</span>
          <input
            type="text"
            placeholder="large-cap"
            className="bg-transparent border-none outline-none text-[#A3A3A3]"
          />
        </div>
        <p className="text-[#6B6B6B]">Press Apply to see changes.</p>
      </div>
      <div className="flex flex-col gap-[8px]">
        <p className="text-[#FFFFFF] text-[14px] leading-[20px] font-medium">
          Risk
        </p>
        <div
          onClick={() => setDropDown((prev) => !prev)}
          className=" relative p-[12px] flex justify-between items-center gap-[16px] outline outline-1 text-[#D6D6D6] outline-[#D6D6D6] rounded-[8px] hover:outline-2 hover:outline-[#FFFFFF]"
        >
          <p>
            <span>#</span> Insert text here
          </p>
          <BsArrowDownCircle className=" cursor-pointer"/>
          <div
            style={{ display: `${dropDown ? "flex" : "none"}` }}
            className=" rounded flex-col absolute top-[120%] left-0 w-[100%] bg-primaryColor"
          >
            <p className="px-[10px] lg:px-[2px] py-[4px] text-[#A3A3A3] flex gap-[10px] hover:bg-white hover:text-[#6B6B6B] rounded ">
              Low risk
            </p>
            <p className="px-[10px] lg:px-[2px] py-[4px] text-[#A3A3A3] flex gap-[10px] hover:bg-white hover:text-[#6B6B6B] rounded ">
              Mid-risk
            </p>
            <p className="px-[10px] lg:px-[2px] py-[4px] text-[#A3A3A3] flex gap-[10px] hover:bg-white hover:text-[#6B6B6B] rounded ">
              Hight risk
            </p>
            <p className="px-[10px] lg:px-[2px] py-[4px] text-[#A3A3A3] flex gap-[10px] hover:bg-white hover:text-[#6B6B6B] rounded ">
              Option text here
            </p>
          </div>
        </div>
      </div>
      <button className="bg-[#554DB7] text-[#ffffff] rounded-[14px] mt-[29px] font-semibold text-[24px]  w-[100%] py-[18px]">
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
