import { useState } from 'react';

function App() {
  const [input, setInput] = useState(''); // Separate state for input
  const [result, setResult] = useState('');
  const [selectedOperator, setSelectedOperator] = useState(null);

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = (value) => {
    if (value === '.' && input.includes('.')) {
      // Ignore additional decimal points
      return;
    }

    if (ops.includes(value)) {
      // Set the selected operator and append it to the input
      setSelectedOperator(value);
      setInput((prevInput) => prevInput + value);
    } else {
      // Append digits to the input
      setInput((prevInput) => prevInput + value);
      setSelectedOperator(null);
    }
  };

  const calculate = () => {
    // Evaluate the expression stored in input
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearAll = () => {
    setInput('');
    setResult('');
    setSelectedOperator(null);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''}
          &nbsp;
          {selectedOperator !== null ? '' : input || '0'}
        </div>
        <div className="clear-button">
          <button onClick={clearAll}>C</button>
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
        </div>
        <div className="digits">
          {Array.from({ length: 9 }, (_, i) => (
            <button onClick={() => updateCalc(i + 1)} key={i + 1}>
              {i + 1}
            </button>
          ))}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
