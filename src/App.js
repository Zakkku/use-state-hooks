import React from "react";
import './App.css';

function App() {
  const [number, setNumber] = React.useState(0);
  
  // use a boolean to move through stages of a multi-stage form
  const [formStage, setFormStage] = React.useState(0);
  //
  const [names, setNames] = React.useState(['FundastA Engineers', 'Zach', 'An'])

  // State to store the input named
  const [inputName, setInputName] = React.useState('');

  let content;
  if (formStage === 0) {
    content = (
      <>
      <h1>Let's use state: Step 1</h1>
      
        

      <input
          onChange={e => setInputName(e.target.value)} // Update inputName state
          type="text"
          value={inputName} // Bind the input to the state
        />
        
        
        <button onClick={() => setFormStage(formStage + 1) }>Next</button>
        {inputName.length > 10 && <div className="error-message">Input too long</div>}
        <p>{inputName}</p>
        </>
    )
  }

  if (formStage === 1) {
    content = (
      <>
      <h1>Let's use state: Step 2</h1>
      
        <h2>{number}</h2>
        
        <button onClick={() => setFormStage(formStage - 1) }>Previous</button>

        <button onClick={() => setNumber(number + 1)}>
          +
        </button>

        <button onClick={() => setFormStage(formStage + 1) }>Next</button>
        
        </>
    )
  }

  if (formStage === 2) {
    content = (
      <>
      <h1>Let's use state: Step 3</h1>
      
      <button onClick={() => setFormStage(formStage - 1) }>Previous</button>
      <button onClick={() => setNames(names.slice(0, -1))}>Remove Name</button>
      <button onClick={() => setNames([...names, inputName])}>Add name</button> 
      
      
       
        {
        names.map(name => <div key={name}>{name}</div>)
      }
      </>
    )
  }

  return (
    <div className="App">
      
        {content}
    </div>
  );
}

export default App;
