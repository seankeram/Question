import { Box, Button, Typography } from "@mui/material";
const QuesList = (props) => {
  const { onClick, count, result, wrong } = props;
  console.log(result);

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

  if (count === 4) {
    return (
      <>
        <Typography sx={{ fontWeight: "bold" }}>
          The result of the question
        </Typography>
        <Typography sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              gap: 10,
              height: 50,
              bgcolor: "success.main",
              borderRadius: 5,
              textTransform: "none",
              alignItems: "center",
              fontSize: "13px",
              marginTop: "30px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
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
              bgcolor: "red",
              borderRadius: 5,
              textTransform: "none",
              alignItems: "center",
              fontSize: "13px",
              marginTop: "30px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
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
            .map((question) => {
              return (
                <div size="small" key={question.id}>
                  <Typography variant="h4" color="initial" padding={2}>
                    Question
                  </Typography>
                  <Typography
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "lightgray",
                      boxShadow: 3,
                      height: "64px",
                      backgroundColor: "black",
                      borderRadius: 5,
                    }}
                  >
                    <Typography
                      fontSize={13}
                      noWrap
                      key={question}
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
                            borderRadius: 5,
                            textTransform: "none",
                            fontSize: "13px",
                            marginTop: "30px",
                            fontWeight: "bold",
                            height: "64px",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {answer.text}
                        </Button>
                      </>
                    );
                  })}
                </div>
              );
            })}
        </Box>
      </>
    );
  }
};
export default QuesList;
