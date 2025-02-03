import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetToday, fetchWeatherToday } from '../features/today/todaySlice';
import styled from 'styled-components';

const TestText = styled.div`
  width: 500px;
  height: 500px;
  background-color: gray;
    p {
      font-size: 50px;
      color: pink;
    }
`;

function Today(prors) {
  const dispatch = useDispatch();
  const {weatherToday, loading, error} = useSelector((state) => state.weathers);


  useEffect(() => {
    dispatch(fetchWeatherToday())
  }, [dispatch]);
  
  console.log(weatherToday);
  
  
  
  if(loading){return <p>loading...</p>}
  if(error){return <p>{error}</p>}
  return (
    <>
      {weatherToday&&(
        <TestText>
        <p>
        오늘의 날씨
        </p>
        {/* {getWeatherToday.map((today) => (
          <li>today</li>
        )) } */}
        {/* <h4>{weatherToday.name}</h4> */}
      </TestText>
      )}
    </>
    
  );
}

export default Today;