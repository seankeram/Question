import { useState } from "react";
import QuesList from "./QuesList";

const QuestionBox = () => {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="h-[820px]">
      <div className=" flex items-center justify-center p-4 h-full">
        <div className="border-spacing-1 border-solid bg-slate-50  rounded-lg shadow-sm p-4 h-full w-full">
          {/* <MotionBar></MotionBar> */}
          <QuesList onClick={handleClick} count={count}></QuesList>
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;
