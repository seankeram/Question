import { Box } from "@mui/material";
import React, { useState } from "react";
import QuesList from "./QuesList";
import MotionBar from "./motionBar";

interface Answer {
  id: number;
  answer: string;
}

const QuestionBox = () => {
  const [count, setCount] = useState<number>(1);
  const [data, setData] = useState<Answer>();
  const [result, setResult] = useState<number>(0);
  const [wrong, setWrong] = useState<number>(0);
  const [width, setWidth] = useState<number>(10);
  const [animation, setAnimation] = useState<boolean>(true);

  const correctList = () => {
    if (data?.answer) {
      setResult((result) => result + 1);
    } else {
      setWrong((wrong) => wrong + 1);
    }
  };

  const handleClick = (id, answer) => {
    setData({
      id,
      answer,
    });
    setWidth(width + 10);
    setCount(count + 1);
    correctList();
    setAnimation(false);
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 3,
          height: "100%",
        }}
      >
        <Box
          sx={{
            bgcolor: "#eeeeee",
            borderRadius: 4,
            boxShadow: 4,
            padding: 3,
            height: "100%",
            width: "100%",
          }}
        >
          <MotionBar width={width}></MotionBar>
          <QuesList
            animation={animation}
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
