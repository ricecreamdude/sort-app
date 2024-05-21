import { useState } from "react"
import { mockArrayData } from "./shared/constants"
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

  const [ barGraphData, setBarGraphData] = useState(createShuffledArray())

  const handleShuffle = () => {

    const arr = createShuffledArray();
    setBarGraphData(arr);
  }

  //https://www.robinwieruch.de/react-update-item-in-list/
  const handleQuickSort = () => {

    
    const quickSort = (arr: any): any[] => {
      if (arr.length <= 1) {
        return arr;
      }
    
      let pivot = arr[0];
      let leftArr: any[] = [];
      let rightArr: any[] = [];
    
      for (let i = 1; i < arr.length; i++) {
        if (arr[i].height < pivot.height) {
          setTimeout( () => {}, 100)
          leftArr.push(arr[i])
        } else {
          setTimeout( () => {}, 100)
          rightArr.push(arr[i])
        }
      }
    
      return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    };


    let updated = [...barGraphData];

    let sorted = quickSort(updated)

    setBarGraphData(sorted);

    console.log('sorting')

  }

  return (
    <div>
      <div className="header">Sort Algorithms</div>
      <div className="bar-chart">
        {barGraphData.map( bar => <Bar height={bar.height} key={bar.height} selected={bar.selected}/> )}
      </div>
      <footer>
        <button onClick={handleShuffle}>shuffle</button>
        <button onClick={handleQuickSort}>Quick Sort</button>
      </footer>
    </div>
  )
}


export default App
