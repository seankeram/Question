import { Box } from "@mui/material";
import { useState } from "react";
import QuesList from "./QuesList";

const QuestionBox = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState();
  const [result, setResult] = useState(0);
  const [wrong, setWrong] = useState(0);

  const correctList = () => {
    if (data?.answer?.isCorrect) {
      setResult(result + 1);
    } else {
      setWrong(wrong + 1);
    }
  };
  const handleClick = (id, answer) => {
    setData({
      id,
      answer,
    });

    setCount(count + 1);
    correctList();
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Box className=" flex items-center justify-center p-4 h-full">
        <Box className="border-spacing-1 border-solid bg-slate-50  rounded-lg shadow-sm p-4 h-full w-full">
          {/* <MotionBar></MotionBar> */}
          <QuesList
            result={result}
            wrong={wrong}
            onClick={handleClick}
            count={count}
          ></QuesList>
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionBox;
