import { Box, Button, Typography } from "@mui/material";
const QuesList = (props) => {
  const { onClick, count } = props;

  const answerList = [
    {
      id: 1,
      ques: "How do you declare a variable in JavaScript?",
      title: [
        { isCorrect: false, text: "null is an intentional absence of value" },
        {
          isCorrect: false,
          text: "You can declare a variable using the var, let, or const keywords.",
        },
        {
          isCorrect: false,
          text: "add an event listener to an HTML element in JavaScript",
        },
        { isCorrect: true, text: "the var, let, or const keywords." },
      ],
    },
    {
      id: 2,
      ques: "What is a callback function in JavaScript?",
      title: [
        {
          isCorrect: false,
          text: "add an event listener to an HTML element in JavaScript",
        },
        { isCorrect: false, text: "null is an intentional absence of value" },
        { isCorrect: true, text: "the var, let, or const keywords." },
        {
          isCorrect: false,
          text: "You can declare a variable using the var, let, or const keywords.",
        },
      ],
    },
    {
      id: 3,
      ques: "How do you loop through an array in JavaScript?",
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
        { isCorrect: true, text: "the var, let, or const keywords." },
      ],
    },
  ];

  return (
    <>
      <Box>
        {answerList
          ?.filter((item) => item?.id === count)
          .map((answer) => {
            return (
              <div size="small" key={answer.id}>
                <Typography variant="h4" color="initial" padding={2}>
                  Question
                </Typography>
                <Typography
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "lightgray",
                    boxShadow: 3,
                    height: "64px",
                    backgroundColor: "black",
                    borderRadius: 5,
                    padding: 8,
                  }}
                >
                  <Typography fontSize={17} noWrap key={answer}>
                    {answer.ques}
                  </Typography>
                </Typography>

                {answer.title.map((e) => {
                  return (
                    <Button
                      key={e}
                      onClick={onClick}
                      size="small"
                      variant="contained"
                      disableElevati
                      style={{
                        textTransform: "none",
                        fontSize: "17px",
                        marginTop: "30px",
                        height: "64px",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {e.text}
                    </Button>
                  );
                })}
              </div>
            );
          })}
      </Box>
    </>
  );
};
export default QuesList;
