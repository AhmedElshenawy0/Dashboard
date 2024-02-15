import Filter from "./Filter";

const Main = () => {
  return (
    <div className="mx-[16px] bg-primaryColor rounded-[15px] py-[15px] xl:py-[20px] px-[20px] lg:py-[50px] xl:px-[63px] flex flex-col lg:flex-row lg:items-start items-center xl:gap-[45px] gap-[20px]">
      <Filter />
      <div className="flex-1 bg-secondaryColor md:p-[15px] rounded-[15px]">
        <div className="linear border-[0.6px] border-[#D5D5D5] rounded-[12px] lg:pt-[15.39px] lg:pb-[24px]">
          <div className="flex flex-wrap items-center lg:mr-[39.64px] lg:ml-[34.31px] text-center text-white">
            <div className="w-[45%] lg:flex-1 lg:after lg:relative py-[10px] lg:py-0  gap-[6px] flex justify-center">
              <span>$</span>
              $TSLA
            </div>
            <div className="w-[45%] lg:flex-1 lg:after lg:relative py-[10px] lg:py-0  gap-[10px] flex justify-center">
              <span>$</span>
              200 Contracts
            </div>
            <div className="w-[45%] lg:flex-1 lg:after lg:relative py-[10px] lg:py-0  gap-[9px] flex justify-center">
              <span>$</span>
              12.2%
            </div>
            <div className="w-[45%] lg:flex-1 lg:after lg:relative py-[10px] lg:py-0  flex justify-center gap-[13px]">
              <span>$</span>
              High risk
            </div>
          </div>
        </div>
        <div className="bg-[#121213] rounded-[12px] border border-[#D5D5D5] py-[10px] px-[35px] mt-[9px]">
          <p className="text-[14px] md:text-[18px] xl:text-[24px] leading-[32px] text-white">
            X company released a short report on $XYZ, High IV option sales opps
          </p>
        </div>
        <div className="bg-[#121213] rounded-[12px] border border-[#D5D5D5] py-[10px] px-[35px] mt-[9px]">
          <p className="text-[14px] md:text-[18px] xl:text-[24px] leading-[32px] text-white">
            $XYZ just announced an acquisition of $ABC at $X. This is an
            arbitrage opportunity, with the max gain being %X if the deal
            closes, but the possible risk is %Y if the deal fails.
          </p>
        </div>
        <div className="bg-[#121213] rounded-[12px] border border-[#D5D5D5] py-[10px] px-[35px] mt-[9px]">
          <p className="text-[14px] md:text-[18px] xl:text-[24px] leading-[32px] text-white">
            $XYZ just announced an acquisition of $ABC at $X. This is an
            arbitrage opportunity, with the max gain being %X if the deal
            closes, but the possible risk is %Y if the deal fails.
          </p>
        </div>
        <div className="bg-[#121213] rounded-[12px] border border-[#D5D5D5] py-[10px] px-[35px] mt-[9px]">
          <p className="text-[14px] md:text-[18px] xl:text-[24px] leading-[32px] text-white">
            $XYZ just announced an acquisition of $ABC at $X. This is an
            arbitrage opportunity, with the max gain being %X if the deal
            closes, but the possible risk is %Y if the deal fails.
          </p>
        </div>
        <div className="bg-[#121213] rounded-[12px] border border-[#D5D5D5] py-[10px] px-[35px] mt-[9px]">
          <p className="text-[14px] md:text-[18px] xl:text-[24px] leading-[32px] text-white">
            $XYZ just announced an acquisition of $ABC at $X. This is an
            arbitrage opportunity, with the max gain being %X if the deal
            closes, but the possible risk is %Y if the deal fails.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
