import logo from './logo.svg';
import './App.css';
import fetchData from './components/fetchData';
import { useEffect, useState } from 'react';


function App() {
  const [responseData, setResponseData] = useState();
  const [steps, setSteps] = useState('');

  useEffect(() => {
    console.log('Steps:')
    console.log(steps)
    console.log('Fetched Data:')
    console.log(JSON.stringify(responseData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps])

  useEffect(async () => {
    if(responseData){
      setSteps(responseData.choices); //[0].message.content
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responseData])

  useEffect(async () => {
    let data = await fetchData();
    setResponseData(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  



  return (
    <div className="App">

    </div>
  );
}

export default App;
