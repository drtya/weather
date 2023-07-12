import {useState} from "react";

import WeatherData from "../WeaherData/WeatherData";
import "./App.css"
import Form from "../Form";
import Error from "../Error/Error";

function App() {
  const [error,setError] =  useState(false);
  const [city,setCity]= useState('');
  const API_KEY = 'f081d3cca360e3e80f7aedb630b0a079';
  const [weather, setWeather] = useState('');
  
  return (
    <div className="app">
      <Form setCity={setCity} city={city} setWeather={setWeather} setError={setError} API_KEY={API_KEY}/>
      {weather && !(error)?  <WeatherData weather={weather}/> :
       error ? <Error/> :
      <div className="enter">Введите город</div>}
    </div>
  );
}

export default App;
