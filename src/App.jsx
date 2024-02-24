import QuestionBox from "./component/questionBox";

function App() {
  const questionList = [
    {
      title: "What is the difference between == and === in JavaScript?",
      answers: ["answer 1", "answer 2"],
      correct: [],
    },
  ];

  return (
    <>
      <QuestionBox questionList={questionList}></QuestionBox>
    </>
  );
}

export default App;
