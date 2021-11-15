import { useState , useEffect } from 'react'
import Routes from './components/Routes'
import Chart from './components/Chart'
import WeatherInfo from './components/WeatherInfo'

import getRampAlgorithms from "./server/api.js";


function App() {

  const [ramp, setRamp] = useState({})
  let occurrences
  getRampAlgorithms(async (ramps) => {
   occurrences = await ramps.map(x => x.algorithm).reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});

    
  });

  let obj = {}


  useEffect(() => {
    setInterval( () =>setRamp(occurrences),5000)
  }, [])
  // getRampAlgorithms(async (ramps) => {
  //   const occurrences = await ramps.map(x => x.algorithm).reduce(function (acc, curr) {
  //     return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  //   }, {});
  //   obj = await occurrences
  // });




  return (
    <main className="App">
        <aside className="sidebar p2">
          
          <WeatherInfo />
          
          <Routes />
          
         <Chart ramp={ramp} />
       </aside>
       <section className="content"></section>
    </main>
  );
}

export default App;
