import React from "react";
import { useEffect, useRef } from "react";
const deg = 6;

export const Clock = () => {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);
  useEffect(() => {
    const setClock = () => {
      let data = new Date();
      let hourData = data.getHours() * 30;
      let minuteData = data.getMinutes() * deg;
      let secondData = data.getSeconds() * deg;
      if (hourRef.current && minuteRef.current && secondRef.current) {
        hourRef.current.style.transform = `rotateZ(${
          hourData + minuteData / 12
        }deg)`;
        minuteRef.current.style.transform = `rotateZ(${minuteData}deg)`;
        secondRef.current.style.transform = `rotateZ(${secondData}deg)`;
      }
    };

    setClock();
    const intervalId = setInterval(setClock, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="w-full flex justify-center ">
      <div className="relative lg:w-[200px] lg:min-h-[200px] w-[148px] h-[148px]  flex justify-center items-start rounded-full bg-black mb-[140px] mt-[50px] bg-opacity-20">
        <div
          id="minute"
          ref={minuteRef}
          className="w-[3px] lg:min-h-[85px] lg:mt-[15px] min-h-[54px] mt-[20px] z-[10px] bg-black  bg-opacity-50 transform origin-bottom absolute"
        ></div>
        <div
          id="hour"
          ref={hourRef}
          className="w-[3px] lg:min-h-[40px] lg:mt-[60px] min-h-[24px] mt-[50px] z-[10px] bg-black transform origin-bottom absolute"
        ></div>
        <div
          id="second"
          ref={secondRef}
          className="w-[2px] lg:min-h-[90px] lg:mt-[10px] min-h-[66px] mt-[8px] z-[10px] bg-red-800 transform origin-bottom bg-opacity-70 absolute"
        ></div>
      </div>
    </div>
  );
};
