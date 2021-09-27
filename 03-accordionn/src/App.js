import React, { useState } from "react";
import SingleQuestion from "./Questions";
import info from "./data";

const App = () => {
  const [questions, showQuestions] = useState(info);

  React.useEffect(() => {
    return () => {
      showQuestions(questions);
    };
  }, []);
  return (
    <div className="container">
      <h3>Questions And Answers About Login</h3>
      <section className="info">
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </section>
    </div>
  );
};

export default App;
