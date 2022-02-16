import { React, useState } from "react";
import AddQuoteForm from "./components/addQuoteForm";
import RenderTasks from "./components/renderQuotes";

function App() {
  const [state, setState] = useState([
    {id: 1, title: "Task 1", quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}, {id: 2, title: "Task 2", quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}, {id: 3, title: "Task 3", quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}, {id: 4, title: "Task 4", quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}, {id: 5, title: "Task 5", quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
  ]);
  return (
    <div className="mt-5 mx-3">
      <AddQuoteForm />
      <br /><hr /><br />
      <RenderTasks tasks={state} />
    </div>
  );
}

export default App;