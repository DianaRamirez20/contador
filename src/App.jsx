import './App.css';

import {useState} from 'react';

function App() {
    const [counter, setCounter] = useState(0);
    
  return (
      <>
          Haz presionado el botón { counter } veces.
          <br/>

          <button onClick={() => setCounter(counter + 1)}>+</button>
      </>
  );
}

export default App;
