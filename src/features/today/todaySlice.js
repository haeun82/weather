import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeatherToday,getWeather5days } from "../../api/weatherapi";

// const initialState = {
//   // todayList: [],
//   loading:false,
//   error:null,
//   getToday: null,
//   // status: 'idel'
// }

export const fetchWeatherToday = createAsyncThunk('weather/fetchWeatherToday', async(cityName = "Seoul")=>{
  const response = await getWeatherToday(cityName);
    return response.data
    
})

export const fetchWeather5days = createAsyncThunk('weather/fetchWeather5days', async(cityName = "Seoul")=>{
  const response = await getWeather5days(cityName);
  return response.data
})

// console.log(getToday);

const weatherSlice = createSlice({
  name: 'weathers',
  initialState:{
    loading:false,
    error:null,
    weatherToday: null,
    Weather5days: null
  },
  reducers: {
    // getToday: (state, action) => {
    //   state.todayList = action.payload;
    // }
  },
  extraReducers:(builder)=>{
    builder
      .addCase(fetchWeatherToday.pending,(state)=>{
        state.loading = true
        state.error=null
      })
      .addCase(fetchWeatherToday.fulfilled,(state,action)=>{
        state.loading = false
        state.weatherToday=action.payload
      })
      .addCase(fetchWeatherToday.rejected,(state,action)=>{
        state.loading = false
        state.error = action.error.message
      })
      .addCase(fetchWeather5days.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather5days.fulfilled, (state, action) => {
        state.loading = false;
        state.weather5days = action.payload;
      })
      .addCase(fetchWeather5days.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

// export const {
//   getTodayWeather
// } = todaySlice.actions;

// export const selectedTodayList = (state) => state.today.todayList;
// export const selectStatus = (state) => state.today.status;

export default weatherSlice.reducer;