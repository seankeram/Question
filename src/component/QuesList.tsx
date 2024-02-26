import { Box, Button, Typography } from "@mui/material";
import React from "react";
const QuesList = (props) => {
  const { onClick, count, result, wrong } = props;

  const answerList = [
    {
      id: 1,
      ques: "How do you declare a variable in JavaScript?",
      title: [
        {
          isCorrect: false,
          text: "null is an intentional absence of value",
        },
        {
          isCorrect: false,
          text: "You can declare a variable using the var, let, or const keywords.",
        },
        {
          isCorrect: false,
          text: "add an event listener to an HTML element in JavaScript",
        },
        {
          isCorrect: true,
          text: "You can declare a variable using the var, let, or const keywords.",
        },
      ],
    },
    {
      id: 2,
      ques: "How do you loop through an array in JavaScript?",
      title: [
        {
          isCorrect: false,
          text: "add an event listener to an HTML element in JavaScript",
        },
        { isCorrect: false, text: "null is an intentional absence of value" },
        {
          isCorrect: true,
          text: "You can loop through an array using a for loop, forEach method, or for...of loop.",
        },
        {
          isCorrect: false,
          text: "You can declare a variable using the var, let, or const keywords.",
        },
      ],
    },
    {
      id: 3,
      ques: "What is the difference between let and var in JavaScript?",
      title: [
        { isCorrect: false, text: "null is an intentional absence of value" },
        {
          isCorrect: false,
          text: "add an event listener to an HTML element in JavaScript",
        },
        {
          isCorrect: false,
          text: "You can declare a variable using the var, let, or const keywords.",
        },
        {
          isCorrect: true,
          text: "let is block-scoped, while var is function-scoped.",
        },
      ],
    },
    {
      id: 4,
      ques: "What is the purpose of the document object in JavaScript?",
      title: [
        {
          isCorrect: true,
          text: "The document object represents the HTML document in the browser and provides methods and properties for interacting with it.",
        },
        { isCorrect: false, text: "null is an intentional absence of value" },
        {
          isCorrect: false,
          text: "add an event listener to an HTML element in JavaScript",
        },
        {
          isCorrect: false,
          text: "You can declare a variable using the var, let, or const keywords.",
        },
      ],
    },
    {
      id: 5,
      ques: "How do you create an object in JavaScript?",
      title: [
        { isCorrect: false, text: "null is an intentional absence of value" },
        {
          isCorrect: false,
          text: "add an event listener to an HTML element in JavaScript",
        },
        {
          isCorrect: true,
          text: "You can create an object using object literal notation, constructor functions, or the class syntax.",
        },
        {
          isCorrect: false,
          text: "You can declare a variable using the var, let, or const keywords.",
        },
      ],
    },
    {
      id: 6,
      ques: "What is the difference between null and undefined in JavaScript?",
      title: [
        { isCorrect: false, text: "null is an intentional absence of value" },
        {
          isCorrect: false,
          text: "add an event listener to an HTML element in JavaScript",
        },
        {
          isCorrect: false,
          text: "You can declare a variable using the var, let, or const keywords.",
        },
        {
          isCorrect: true,
          text: "null represents the intentional absence of a value, while undefined represents the absence of a value that has not been assigned.",
        },
      ],
    },
    {
      id: 7,
      ques: "How do you handle errors in JavaScript?",
      title: [
        { isCorrect: false, text: "null is an intentional absence of value" },
        {
          isCorrect: true,
          text: "You can use try...catch blocks to handle errors in JavaScript. ",
        },
        {
          isCorrect: false,
          text: "add an event listener to an HTML element in JavaScript",
        },
        {
          isCorrect: false,
          text: "You can declare a variable using the var, let, or const keywords.",
        },
      ],
    },
    {
      id: 8,
      ques: "What is the difference between synchronous and asynchronous code in JavaScript?",
      title: [
        {
          isCorrect: true,
          text: "Synchronous code is executed sequentially, while asynchronous code allows for non-blocking operations and can be executed simultaneously.",
        },
        { isCorrect: false, text: "null is an intentional absence of value" },
        {
          isCorrect: false,
          text: "add an event listener to an HTML element in JavaScript",
        },
        {
          isCorrect: false,
          text: "You can declare a variable using the var, let, or const keywords.",
        },
      ],
    },
    {
      id: 9,
      ques: "What is a variable in JavaScript?",
      title: [
        { isCorrect: false, text: "null is an intentional absence of value" },
        {
          isCorrect: false,
          text: "add an event listener to an HTML element in JavaScript",
        },
        {
          isCorrect: false,
          text: "You can declare a variable using the var, let, or const keywords.",
        },
        {
          isCorrect: true,
          text: "let is block-scoped, while var is function-scoped.",
        },
      ],
    },
    {
      id: 10,
      ques: "How do you convert a string to a number in JavaScript?",
      title: [
        { isCorrect: false, text: "null is an intentional absence of value" },
        {
          isCorrect: false,
          text: "add an event listener to an HTML element in JavaScript",
        },
        {
          isCorrect: false,
          text: "You can declare a variable using the var, let, or const keywords.",
        },
        {
          isCorrect: true,
          text: "You can use the parseInt or parseFloat functions to convert a string to a number in JavaScript.",
        },
      ],
    },
  ];

  if (count === 11) {
    return (
      <>
        <Typography
          sx={{
            fontWeight: "bold",
            padding: 5,
            display: "flex",
            justifyContent: "center",
            text: "capitalize",
          }}
        >
          The result of the question
        </Typography>
        <Typography sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              gap: 10,
              height: 50,
              bgcolor: "#a2cf6e",
              borderRadius: 5,
              textTransform: "none",
              alignItems: "center",
              fontSize: "13px",
              marginTop: "30px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              filter: "drop-shadow(2px 4px 6px #757575)",
            }}
          >
            <Typography>Correct</Typography>
            {result}
          </Box>
          <Box
            sx={{
              width: "100%",
              gap: 10,
              height: 50,
              bgcolor: "#ff7474",
              borderRadius: 5,
              textTransform: "none",
              alignItems: "center",
              fontSize: "13px",
              marginTop: "30px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              filter: "drop-shadow(2px 4px 6px #757575)",
            }}
          >
            <Typography>wrong</Typography>
            {wrong}
          </Box>
        </Typography>
      </>
    );
  } else {
    return (
      <>
        <Box>
          {answerList
            ?.filter((item) => item?.id === count)
            .map((question, index) => (
              <Box component={"section"} key={index.toString()}>
                <Typography
                  variant="h4"
                  color="initial"
                  padding={2}
                  paddingY={5}
                >
                  Question
                </Typography>
                <Typography
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 1,
                    paddingX: 2,
                    color: "lightgray",
                    boxShadow: 3,
                    height: "auto",
                    minHeight: "50px",
                    backgroundColor: "black",
                    borderRadius: 5,
                    filter: "drop-shadow(2px 4px 6px #757575)",
                  }}
                >
                  <Typography
                    component="p"
                    key={question?.id}
                    fontSize={13}
                    fontWeight={"bold"}
                  >
                    {question.ques}
                  </Typography>
                </Typography>

                {question.title.map((answer) => {
                  return (
                    <>
                      <Button
                        key={answer.text}
                        onClick={() => onClick(question.id, answer)}
                        size="small"
                        variant="contained"
                        disableElevation
                        sx={{
                          minHeight: "50px",
                          borderRadius: 5,
                          textTransform: "none",
                          fontSize: "13px",
                          marginTop: "30px",
                          fontWeight: "bold",
                          height: "auto",
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          filter: "drop-shadow(2px 4px 6px #757575)",
                        }}
                      >
                        {answer.text}
                      </Button>
                    </>
                  );
                })}
              </Box>
            ))}
        </Box>
      </>
    );
  }
};
export default QuesList;
