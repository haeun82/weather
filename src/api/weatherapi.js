import axios from "axios";
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const AUTH_KEY = 'db22b45aa0a4e3cc780eb0a58f2e46cd'

const opwtApi = axios.create({
  baseURL : BASE_URL,
  headers: {
    accept: 'application/json',
  },
})
//오늘의 날씨 조회
export const getToday = async () => {
    const response = await opwtApi.get('/weather',
      {
        params:{
          q:'Incheon',
          appid:AUTH_KEY,
          units:'metric',
          lang:'kr'
        }
      }
    );
      return response;
    
};
