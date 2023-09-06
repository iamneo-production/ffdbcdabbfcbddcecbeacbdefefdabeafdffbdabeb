// src/App.js

import { filterOdd, filterEven, generateRandomList } from './functions/filterOddEven';

function App() {
  const randomList = generateRandomList(10);
  const oddList = filterOdd(...randomList);
  const evenList = filterEven(...randomList);

  return (
    <div>
      <h2>Random List:</h2>
      <ul>
        {randomList.map((num) => (
          <li>{num}</li>
        ))}
      </ul>

      <h2>Odd List:</h2>
      <ul>
        {oddList.map((num) => (
          <li>{num}</li>
        ))}
      </ul>

      <h2>Even List:</h2>
      <ul>
        {evenList.map((num) => (
          <li>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;