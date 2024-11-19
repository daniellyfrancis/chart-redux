import './App.css';
import { Line } from 'react-chartjs-2';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from "./actions/bitcoinActions";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.bitcoin);

  const [num, setNum] = useState(15);


  const fetchData = (time) => {
    // Fetch data from redux using time
    dispatch(getData({
      time: time,
      number: num,
    }))
  }

  return (
    <div className="App">
      <div className={"btns-wrapper"}>
        <button onClick={() => fetchData("1 min")}>1 min</button>
        <button onClick={() => fetchData("5 min")}>5 min</button>
        <button onClick={() => fetchData("15 min")}>15 min</button>

        <input onChange={e => setNum(e.target.value)} />
        {state.loading && <p>Loading...</p>}
      </div>
      <div className={"chart-wrapper"}>
        <Line 
          data={state.data}
        />
      </div>
    </div>
  );
}

export default App;
