import { Typography } from "@mui/material";

const Question = () => {
  const questionList = [
    { title: "How do you declare a variable in JavaScript?" },
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
        {questionList.map((ques, id) => {
          return (
            <Typography fontSize={10} noWrap key={id}>
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
