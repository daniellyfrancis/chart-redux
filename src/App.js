import logo from './logo.svg';
import './App.css';
import { Line } from 'react-chartjs-2';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(15);

  const data = {
    labels: ["11:00", "12:00"],
    datasets: [{
      label: "BTC",
      data: [4000, 5000],
      backgroundColor: 'rgba(238, 175,0, 0.4)',
      borderColor: 'rgba(238, 175,0, 0.5)',
      pointBorderColor: 'rgba(238, 175,0, 0.7)',
    }]
  }

  const fetchData = (time) => {
    // Fetch data from redux using time
  }

  const loading = true;

  return (
    <div className="App">
      <div className={"btns-wrapper"}>
        <button onClick={() => fetchData("1 min")}>1 min</button>
        <button onClick={() => fetchData("5 min")}>5 min</button>
        <button onClick={() => fetchData("15 min")}>15 min</button>

        <input onChange={e => setNum(e.target.value)} />
        {loading && <p>Loading...</p>}
      </div>
      <div className={"chart-wrapper"}>
        <Line 
          data={data}
        />
      </div>
    </div>
  );
}

export default App;
