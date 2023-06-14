import { useState } from "react"
import Form from "./components/Form";
import Table from "./components/Table";
import axios from 'axios';
import './style.css';

function App() {
  const [data, setData] = useState({})
  const getWeather = (city) => {
    const KEY = 'f4833cf990dc92ef43563c9b00da2a78';
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
    axios(API)
    .then(({data}) => {
      console.log(data);
      setData(data);
    })
  }
  return (
    <div className="wrapper">

      <Form getWeather={getWeather} />
      <Table data={data} />      

    </div>
  );
}

export default App;
