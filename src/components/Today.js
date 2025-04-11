import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherToday } from '../features/today/todaySlice';
import styled from 'styled-components';


const TestText = styled.div`
  width: 500px;
  background-color: rgb(239, 246, 255);
  margin: 0 auto;
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    p {
      font-size: 30px;
      color: #222;
      padding-bottom: 20px;
    }
    h2{
      font-size: 20px;
    }
    ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
`;

const TodayStyle = styled.div`
  background-color:rgb(152, 200, 255);
  width: auto;
  min-height: 100vh;
  padding: 40px 0;
`;

function Today(props) {
  const dispatch = useDispatch();
  const {weatherToday, loading, error} = useSelector((state) => state.weathers);
  const icon = weatherToday?.weather?.[0]?.icon;
  const imgUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : "";

  useEffect(() => {
    dispatch(fetchWeatherToday())
  }, [dispatch]);
  
  console.log(weatherToday);
  
  
  
  
  if(loading){return <p>loading...</p>}
  if(error){return <p>{error}</p>}
  
  
  return (
    <TodayStyle>
      {weatherToday&&(
        <TestText>
        <p>
        오늘의 날씨
        </p>
        <h2>{weatherToday.name}</h2>
        {icon && (
          <p style={{ textAlign: 'center' }}>
            <img src={imgUrl} alt="오늘의 날씨 아이콘" style={{ width: '100px' }} />
          </p>
        )}
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>날씨: {weatherToday?.weather?.[0]?.description}</li>
          <li>기온: {Math.round(weatherToday?.main?.temp)}°C</li>
          <li>체감온도: {Math.round(weatherToday?.main?.feels_like)}°C</li>
          <li>풍속: {weatherToday?.wind?.speed} m/s</li>
        </ul>
      </TestText>
      )}
    </TodayStyle>
  );
}

export default Today;