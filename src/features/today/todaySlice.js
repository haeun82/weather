import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeatherToday } from "../../api/weatherapi";
import { data } from "react-router-dom";

// const initialState = {
//   // todayList: [],
//   loading:false,
//   error:null,
//   getToday: null,
//   // status: 'idel'
// }

export const fetchWeatherToday = createAsyncThunk('weather/fetchWeatherToday', async()=>{
  const response = await getWeatherToday();
    return response.data
    
})

// console.log(getToday);

const weatherSlice = createSlice({
  name: 'weathers',
  initialState:{
    loading:false,
    error:null,
    weatherToday: null,
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
  }
});

// export const {
//   getTodayWeather
// } = todaySlice.actions;

// export const selectedTodayList = (state) => state.today.todayList;
// export const selectStatus = (state) => state.today.status;

export default weatherSlice.reducer;