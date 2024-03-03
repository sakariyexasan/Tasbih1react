import { useState } from "react";
function Tasbih() {
  const [counter, setCounter] = useState(0);
  // function THAT handles the increment action
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  // function THAT handles the decrement action
  const handDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  // function THAT handles the reset action
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div className="text-center mt-32">
      <h1 className="text-7xl mb-10"> {counter}</h1>
      <button
        onClick={handleIncrement}
        className="bg-orange-500 px-4 py-2 text-2xl m-2 rounded"
      >
        Increment
      </button>
      <button
        onClick={handDecrement}
        className="bg-blue-500 px-4 py-2 text-2xl m-2 rounded"
      >
        Decrement
      </button>
      <button
        onClick={handleReset}
        className="bg-green-500 px-4 py-2 text-2xl m-2 rounded"
      >
        Reset
      </button>
    </div>
  );
}
export default Tasbih;
