import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherToday } from '../features/today/todaySlice';
import styled from 'styled-components';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


const TodayStyle = styled.div`
  background-color: rgb(152, 200, 255);
  min-height: 100vh;
  padding: 60px 20px 120px; /* 상단, 좌우, 하단 */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  flex-wrap: wrap;
`;

const TestText = styled.div`
  width: 500px;
  height: 400px;
  background-color: rgb(239, 246, 255);
  margin: 0 auto;
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    p {
      font-size: 30px;
      color: #222;
      padding-bottom: 20px;
      text-align: center;
    }
    h2{
      font-size: 20px;
      text-align: center;
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

const TodayOther = styled.div`
  width: 500px;
  min-height: 400px;
  background-color: rgb(239, 246, 255);
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  p {
    text-align: center;
    font-size: 30px;
    color: #222;
    padding-bottom: 20px;
  }

  h2 {
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

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(152, 200, 255);
  flex-direction: column; 
`;

const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 8px solid rgba(255, 255, 255, 0.3);
  border-top: 8px solid #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
    p {
      margin-top: 50px;
      color: #fff;
      font-size: 20px;
    }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
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
  
  
  
  
  if (loading) {
    return (
      <LoadingWrapper>
        <Spinner />
        <p>날씨 정보를 불러오고 있어요 ☁️</p>
      </LoadingWrapper>
    );
  }
  if(error){return <p>{error}</p>}
  
  const getTodayDateWithDay = () => {
    const now = new Date();
    const day = now.toLocaleDateString("ko-KR",{weekday: "short"});
    const date = now.toISOString().split("T")[0];
    return `${date}(${day})`
  }

  return (
    <>
      <TodayStyle>
        {weatherToday?.weather?.[0]?.icon && (
          <TestText>
          <p>
            {getTodayDateWithDay()}
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
          </ul>
          </TestText>
        )}
        {weatherToday&&(
          <TodayOther>
            <p>
              그 외 정보
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>풍속: {weatherToday?.wind?.speed} m/s</li>
              <li>기압: {weatherToday?.main?.pressure} hPa</li>

            </ul>
          </TodayOther>
        )}
      </TodayStyle>
      <Outlet/>
      <Footer/>
    </>
    
  );
}

export default Today;