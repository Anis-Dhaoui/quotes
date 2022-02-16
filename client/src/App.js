import { React, useEffect, useState } from "react";
import AddQuoteForm from "./components/addQuoteForm";
import RenderTasks from "./components/renderQuotes";
import axios from 'axios';
const url = "http://localhost:3000/";

function App() {
  const [state, setState] = useState([]);

  // Fetching data from database 
  const fetchData = () =>{
    fetch(`${url}quotes`)
    .then(data => data.json())
    .then(res => setState(res));
  }
  // Only call fetchData once after component mounted
  useEffect(() => {
    fetchData();
  }, []);

  // Post new quote
  const postQuote = (quote) =>{
    axios.post(`${url}quotes/`, quote)
    .then(() => fetchData())
  }

  // Update quote
  const updateQuote = (quoteId, body) =>{
    axios.put(`${url}quotes/${quoteId}`, body)
    .then(() => fetchData())
  }

  // delete quote
  const deleteQuote = (quoteId)=>{
    axios.delete(`${url}quotes/${quoteId}`)
    .then(() => fetchData())
  }

  return (
    <div className="mt-5 mx-3">
      <AddQuoteForm handlePosteQuote={(quote) => postQuote(quote)} handleUpdate={(id, body) => updateQuote(id, body)} />
      <br /><hr /><br />
      <RenderTasks quotes={state} handleUpdate={(id, body) => updateQuote(id, body)} handleDelete={(id) => deleteQuote(id)} />
    </div>
  );
}

export default App;