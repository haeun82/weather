
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
import axios from "axios";
const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const AUTH_KEY = 'db22b45aa0a4e3cc780eb0a58f2e46cd'

const opwtApi = axios.create({
  baseURL : BASE_URL,
  headers: {
    accept: 'application/json',
  },
})
//오늘의 날씨 가져오기
export const getWeatherToday = async (city = 'Incheon') => {
    const response = await opwtApi.get('/weather',
      {
        params:{
          q:city,
          appid:AUTH_KEY,
          units:'metric',
          lang:'kr'
        }
      }
    );
      return response;
    
};

export const getWeather5days = async(city = 'Incheon') => {
  const response = await opwtApi.get('/forecast',{
    params:{
      q:city,
      appid:AUTH_KEY,
      units:'metric',
      lang:'kr'
    }
  });
  return response;
}
