import { React, useEffect, useState } from "react";
import AddQuoteForm from "./components/addQuoteForm";
import RenderTasks from "./components/renderQuotes";
import axios from 'axios';
const url = "http://localhost:3000/";

function App() {
  const [state, setState] = useState([]);

  const fetchData = () =>{
    fetch(`${url}quotes`)
    .then(data => data.json())
    .then(res => setState(res));
  }

  useEffect(() => {
    fetchData();
  }, [])
  console.log(state)
  return (
    <div className="mt-5 mx-3">
      <AddQuoteForm />
      <br /><hr /><br />
      <RenderTasks quotes={state} />
    </div>
  );
}

export default App;