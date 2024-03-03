import { useState } from "react";

function Light() {
  const [color, setColor] = useState("");
  // functionka layrka daminaayo
  const handleOn = () => {
    setColor("yellow");
  };
  // functionka layrka daminaayo
  const handleOff = () => {
    setColor("red");
  };
  return (
    <div className="flex justify-center mt-10">
      <div>
        <div
          style={{ backgroundColor: color }}
          className="w-[300px] h-[300px] border-2 border-black  rounded-full"
        ></div>
        <button
          onClick={handleOn}
          className="bg-red-400 ml-16 mt-5 px-3 py-2 text-3xl text-white"
        >
          ON
        </button>
        <button
          onClick={handleOff}
          className="bg-red-400 ml-4 px-3 py-2 text-3xl text-white"
        >
          OFF
        </button>
      </div>
    </div>
  );
}
export default Light;
