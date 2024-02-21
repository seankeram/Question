import { Button } from "@mui/material";
const Answer = (props) => {
  const { onClick, count } = props;

  const answerList = [
    {
      id: 1,
      title: [
        "You can declare a variable using the var, let, or const keywords.",
        "the var, let, or const keywords.",
        "null is an intentional absence of value",
        "add an event listener to an HTML element in JavaScript",
      ],
    },
    {
      id: 2,
      title: ["You can declars."],
    },
  ];

  const correct = [
    "You can declare a variable using the var, let, or const keywords.",
  ];

  return (
    <div>
      <div>
        {answerList
          ?.filter((item) => item?.id === count)
          .map((answer) => {
            return (
              <div size="small" key={answer.id}>
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
                        fontSize: "10px",
                        marginTop: "15px",
                        height: "40px",
                        width: "288px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {e}
                    </Button>
                  );
                })}
              </div>
            );
          })}

        <Button
          onClick={onClick}
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
