import React, { useState} from 'react';
import './App.css';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';

function App() {
  const [thoughts, setThoughts] = useState([{}]);

  const addThought = (thought) => {
    setThoughts(prev => [thought, ...prev]);
  }

  const removeThought = (thoughtIdToRemove) => {
    setThoughts(prev => prev.filter(thought => (thought.id !== thoughtIdToRemove)));
  }

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>

      <main>
        <AddThoughtForm
         addThought = {addThought}/>
         <ul className="thoughts">
           {thoughts.map((thought) => (
           <Thought 
           key={thought.id}
           thought={thought}
           removeThought={removeThought}/>
           ))}
         </ul>
      </main>
    </div>
  );
}

export default App;
