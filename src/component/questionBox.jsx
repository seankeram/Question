import { useState } from "react";
import Answer from "./answer";
import Question from "./question";

const QuestionBox = () => {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className=" flex items-center justify-center p-4 ">
        <div className="border-spacing-1 border-solid bg-slate-50 w-80 h-96 rounded-lg shadow-sm p-4">
          <Question count={count}></Question>
          <Answer onClick={handleClick}></Answer>
        </div>
      </div>
    </>
  );
};

export default QuestionBox;
