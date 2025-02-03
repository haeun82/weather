import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToday } from "../../api/weatherapi";
import { data } from "react-router-dom";

// const initialState = {
//   // todayList: [],
//   loading:false,
//   error:null,
//   getToday: null,
//   // status: 'idel'
// }

export const fetchGetToday = createAsyncThunk('weather/fetchGetToday', async()=>{
  const response = await getToday();
    return response.data
    
})

const todaySlice = createSlice({
  name: 'today',
  initialState:{
    loading:false,
    error:null,
    getToday: null,
  },
  reducers: {
    // getToday: (state, action) => {
    //   state.todayList = action.payload;
    // }
  },
  extraReducers:(builder)=>{
    builder
      .addCase(fetchGetToday.pending,(state)=>{
        state.loading = true
        state.error=null
      })
      .addCase(fetchGetToday.fulfilled,(state,action)=>{
        state.loading = false
        state.getToday=action.payload
      })
      .addCase(fetchGetToday.rejected,(state,action)=>{
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

export default todaySlice.reducer;