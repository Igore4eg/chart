import { useState, useEffect } from "react";

import './App.css';

interface IInitialState {
  name: string;
  time: number;
}

const initialState: IInitialState[]  = [
  { name: 'Landing Page', time: 7.4 },
  { name: 'Configurator', time: 0.2 },
  { name: 'Check-out', time: 7.0 },
  { name: 'Deal', time: 3.8 },
  ];

function App() {
  const [chart, setChart] = useState(initialState);

  useEffect(() => {
    const timerId = setInterval(updateChart, 30000);

    return () => {
      clearInterval(timerId)
    }
  }, [])
  
  const allTime: number = +chart.reduce((prev, cur) => {
    return prev + cur.time
  }, 0).toFixed(2);

  const updateChart = () => {
    const newChart: IInitialState[] = chart.map(value => {
      let newTime: number = +(Math.random() * (10 - 0.1) + 0.1).toFixed(1)
      return {name: value.name, time: newTime}
    })
    setChart(newChart)
  }

  let prevW: number = 0;
  const charts = chart.map((value, index) => {
      const indent = prevW;
      const w = value.time/allTime*100;
      prevW += w;
      return (
        <View key={value.name} 
          name={value.name}
          time={value.time} 
          width={w} 
          ml={indent}/>
      )
    })

  return (
    <div className="App">
      <p>SPENT TIME (SECONDS)</p>
      <div className="charts">
        {charts}
      </div>
      <button onClick={updateChart}>RND</button>
    </div>
  );
}

type ViewProps = {
  name: string;
  time: number;
  width: number;
  ml: number;
}

const View = ({name, time, width, ml}: ViewProps,  ) => {
  
  return(
    <div className="wraperString">
      <div className="lineName">{name}</div>
      <div className="wrapperLine">
        <div className="line" style={{width: `${width}%`, marginLeft: `${ml}%`}}>{`${time}`}</div>
      </div>
    </div>
  )
}

export default App;
