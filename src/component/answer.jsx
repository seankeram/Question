import { Button } from "@mui/material";
const Answer = () => {
  const answerList = [
    "You can loop through an array using a for loop, forEach method,",
    "let is block-scoped, while var is function-scoped.",
    "Synchronous code is executed sequentially, while .    ",
    "You can use the parseInt or parseFloat",
  ];
  const correct = [
    "You can declare a variable using the var, let, or const keywords.",
  ];
  return (
    <div>
      <div>
        {answerList.map((ques, id) => {
          return (
            <Button
              size="small"
              variant="contained"
              disableElevati
              style={{
                textTransform: "none",
                fontSize: "10px",
                marginTop: "15px",
                height: "40px",
                width: "288px",
                display: "flex",
                justifyContent: "center",
              }}
              key={id}
            >
              {ques}
            </Button>
          );
        })}

        <Button
          size="small"
          variant="contained"
          disableElevati
          style={{
            textTransform: "none",
            fontSize: "10px",
            marginTop: "15px",
            height: "40px",
            width: "288px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {correct}
        </Button>
      </div>
    </div>
  );
};
export default Answer;
