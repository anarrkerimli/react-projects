import React, { useState } from "react";
import SingleQuestion from "./Questions";
import info from "./data";

function App() {
  const [questions, setQuestions] = useState(info);
  setQuestions(questions);
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
