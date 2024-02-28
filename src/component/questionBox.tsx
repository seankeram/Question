import { Box } from "@mui/material";
import React, { useReducer, useState } from "react";
import QuesList from "./QuesList";
import MotionBar from "./motionBar";

interface Answer {
  id: number;
  answer: string;
  isCorrect: boolean;
}
interface adding {
  id: number;
  answer: string;
}

const reducer = (state, action) => {
  if (action.type === "TOGGLE_ANIMATION") {
    return false;
  } else {
    return state;
  }
};

const QuestionBox = () => {
  const [count, setCount] = useState<number>(1);
  const [data, setData] = useState<Answer>();
  const [result, setResult] = useState<number>(0);
  const [wrong, setWrong] = useState<number>(0);
  const [width, setWidth] = useState<number>(10);
  const [animation, setAnimation] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useReducer(reducer, false);
  const [addAnswer, setAddAnswer] = useState<adding>();

  const correctList = () => {
    if (data?.isCorrect) {
      setResult((result) => result + 1);
    } else {
      setWrong((wrong) => wrong + 1);
    }
  };

  const handleClick = (id: number, answer: string, isCorrect: boolean) => {
    const newAdding = {
      answer: answer,
      id: Number,
      isCorrect: Boolean,
    };

    setAddAnswer((prevAdd: any): any => {
      return [...(prevAdd || []), newAdding];
    });

    setData({
      id,
      answer,
      isCorrect,
    });

    setWidth((prevWidth) => prevWidth + 10);
    setCount((prevCount) => prevCount + 1);
    correctList();
    setAnimation(false);

    setIsOpen({ type: "TOGGLE_ANIMATION" });
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
            addAnswer={addAnswer}
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
