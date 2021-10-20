import React, { useState} from 'react';
import './App.css';
import { AddThoughtForm } from './AddThoughtForm'

function App() {
  const [thought, setThought] = useState([{}]);

  const addThought = (thought) => {
    setThought(prev => [thought, ...prev]);
  }

  const removeThought = (thoughtIdToRemove) => {
    setThought(prev => prev.filter(thought => (thought.id !== thoughtIdToRemove)));
  }

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>

      <main>
        <AddThoughtForm />
      </main>
    </div>
  );
}

export default App;
