import React from 'react'
import Form from '../Form'
import './WeatherData.css'

const WeatherData = ({ weather }) => {
  const nowTime = new Date(weather.dt * 1000);
  const sunrise = new Date(weather.sys.sunrise * 1000);
  const sunset = new Date(weather.sys.sunset * 1000);
  const monthHandler = (num) => {
    switch (num) {
      case 0: return 'January';
      case 1: return 'February';
      case 2: return 'March';
      case 3: return 'April';
      case 4: return 'May';
      case 5: return 'June';
      case 6: return 'July';
      case 7: return 'August';
      case 8: return 'September';
      case 9: return 'October';
      case 10: return 'November';
      case 11: return 'December';
    }
  }
  const timeHandler = (time) => {
    switch (time.toString().length) {
      case 1: return `0${time}`
      case 2: return time
    }
  }
  return (

    <div className="weather">
      <div className="weather__main-info">
        <div className="weather__time">{`${timeHandler(nowTime.getHours())}:${timeHandler(nowTime.getMinutes())}, ${monthHandler(nowTime.getMonth())} ${nowTime.getDate()}`}</div>
        <div className="weather__city">{weather.name} {weather.sys.country}</div>
        <div className="weather__description">{weather.weather[0].description}</div>
        <div className="weather__temp">
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} className='weather-img' />
          {Math.ceil(weather.main.temp - 273)} °C
        </div>
      </div>
      <div className="weather__secondary">
        <div className="colmn">
          <div className="weather__secondary-el">
            <div className="weather__secondary-el_upper">
              sunrise:
            </div>
            <div className='weather__secondary-el_value'>{timeHandler(sunrise.getHours())}:{timeHandler(sunrise.getMinutes())}</div>
          </div>
          <div className="weather__secondary-el">
            <div className="weather__secondary-el_upper">
              wind:
            </div>
            <div className='weather__secondary-el_value'>{weather.wind.speed} m/s</div>
          </div>
          <div className="weather__secondary-el">
            <div className="weather__secondary-el_upper">
              humidity:
            </div>
            <div className='weather__secondary-el_value'>{weather.main.humidity}%</div>
          </div>
        </div>
        <div className="colmn">
          
          <div className="weather__secondary-el">
            <div className="weather__secondary-el_upper">
              sunset:
            </div>
            <div className='weather__secondary-el_value'>{timeHandler(sunset.getHours())}:{timeHandler(sunset.getMinutes())}</div>
          </div>
          <div className="weather__secondary-el">
            <div className="weather__secondary-el_upper">
              feels like:
            </div>
            <div className='weather__secondary-el_value'>{Math.ceil(weather.main.feels_like - 273)} °C</div>
          </div>
          <div className="weather__secondary-el">
            <div className="weather__secondary-el_upper">
              pressure:
            </div>
            <div className='weather__secondary-el_value'>{weather.main.pressure} hPa</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherData