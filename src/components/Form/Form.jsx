import React from 'react'
import axios from "axios";
import './Form.css'

const Form = ({city,setCity,setWeather,setError,API_KEY}) => {
  const searchHandler = (e) => {
    e.preventDefault()
    city && (
      axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then(({ data }) => {
        setWeather(data)
        setError(false)
      })
      .catch(()=>{
        setError(true);
        setWeather('')
      })
    )
    setCity('')
  }
  const inputHandler= (e)=>{
    setCity(e.target.value);
  }

  return (
    <form className='search-form' onSubmit={searchHandler}>
      <input type='text' className='search-form__input' placeholder='Search city' onChange={inputHandler} value={city} />
      <button type='submit' className='search-form__btn'>Search</button>
    </form>
  )
}

export default Form