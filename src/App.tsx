import { useState } from "react"
import { mockArrayData } from "./constants"
import './App.css'
import Bar from "./components/Bar"
import { createShuffledArray } from './shared/utlis'


/**
 * Requirements
 *  
 *  1. 100 bar graph of values, with display. Only displayed on desktop view.
 *      a. Button to shuffle the order of the graph
 *  2. Quick sort algorithm that organizes the bar graph, ascending
 *  
 * 
 */


function App() {

  const [ barGraphData, setBarGraphData] = useState(mockArrayData)

  const handleShuffle = () => {

    console.log('shuffling')

    const arr = createShuffledArray();
    

    setBarGraphData(arr);
  }

  return (
    <div>
      <div className="header">Sort Algorithms</div>
      <div className="bar-chart">
        {barGraphData.map( height => <Bar height={height} key={height}/> )}
      </div>
      <footer>
        <button onClick={handleShuffle}>shuffle</button>
      </footer>
    </div>
  )
}


export default App
