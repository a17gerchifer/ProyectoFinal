import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import {RoomProvider} from './context'
import api from './api'
ReactDOM.render(
  <React.StrictMode>
  <RoomProvider>
     <App />
  </RoomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

const IndexPage = () => {
  // Create state variables
  let [responseData, setResponseData] = React.useState('')
  // fetches data
  const fetchData = (e) => {
      e.preventDefault()
      api.getData()
      .then((response)=>{
          setResponseData(response.data)
          console.log(response)
      })
      .catch((error) => {
          console.log(error)
      })
  }
  return (
      <div>
          <h1>{responseData.title}</h1>
          <button onClick={(e) => fetchData(e)} type='button'>Click Me For Data</button>
          {responseData.dates && responseData.dates.map(date => {
              return <p>{date}</p>
          })}
      </div>
  )
}
export default IndexPage