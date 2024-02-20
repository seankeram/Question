import { Typography } from "@mui/material";

const Question = ({ count }) => {
  console.log(count);
  const questionList = [
    {
      id: 1,
      title: "How do you declare a variable in JavaScript?",
    },
    {
      id: 2,
      title: "What is a callback function in JavaScript?",
    },
    {
      id: 3,
      title: "How do you loop through an array in JavaScript?",
    },
    {
      id: 4,
      title: "What is the difference between let and var in JavaScript?",
    },
  ];

  return (
    <div
      className="border-spacing-1 border-solid bg-slate-900 w-72 h-7 rounded-lg shadow-sm p-4 mb-12  flex 
    items-center "
    >
      <div
        style={{
          width: 320,
          color: "lightgray",
          boxShadow: 3,
        }}
      >
        {questionList
          ?.filter((item) => item?.id === count)
          .map((ques) => {
            return (
              <Typography fontSize={10} noWrap key={ques.id}>
                {ques.title}
              </Typography>
            );
          })}
      </div>
    </div>
  );
};
export default Question;
// R&D read and development about key usage in loops in react js

{
  /* {questionList.map((quese) => {
  return (
    <div className="" key={quese}>
      <Typography fontSize={10} noWrap>
        {quese}
      </Typography>
    </div>
  );
})} */
}
