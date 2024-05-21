import { useState } from "react"
import { mockArrayData } from "./constants"
import './App.css'

/**
 * Requirements
 *  
 *  1. 100 bar graph of values, with display. Only displayed on desktop view.
 *  2. Quick sort algorithm that organizes the bar graph, ascending
 *  
 * 
 */


function App() {

  const [ barGraphData, setBarGraphData] = useState(mockArrayData)

  return (
    <div>
      <div className="header">Sort Algorithms</div>
      <div className="bar-chart">
        {barGraphData.map( height => <Bar height={height} key={height}/> )}
      </div>
      <footer></footer>
    </div>
  )
}

const Bar = ({height}: {height: number}) => {

  return (
    <div 
    style={{
      height: `${2 * height}px`,
      width: '5px',
      marginRight: '1px',
      backgroundColor: "gray",
    }}
    className="bar"
    />
  )
}

export default App
