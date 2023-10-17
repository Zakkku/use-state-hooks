import React from "react";
import './App.css';

function App() {
  const [number, setNumber] = React.useState(0);
  const [textValue, setTextValue] = React.useState('');
  // use a boolean to move through stages of a multi-stage form
  const [formStage, setFormStage] = React.useState(0);
  //
  const [names, setNames] = React.useState(['FundastA Engineers', 'Zach', 'An'])

  let content;
  if (formStage === 0) {
    content = (
      <>
      <h1>Let's use state: Step 1</h1>
      
        

        <input onChange={e => setTextValue(e.target.value)} type="text"></input>
        
        
        <button onClick={() => setFormStage(formStage + 1) }>Next</button>
        {textValue.length > 10 && <div className="error-message">Input too long</div>}
        <p>{textValue}</p>
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
      <button onClick={() => setNames([...names, "Yamaguchi"])}>Add name</button>
       
       
        {
        names.map(name => <div>{name}</div>)
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
