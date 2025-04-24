import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather5days } from '../features/today/todaySlice';
import styled from 'styled-components';



const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(152, 200, 255);
  flex-direction: column; 
    p {
        margin-top: 50px;
        color: #fff;
        font-size: 20px;
      }
`;

const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 8px solid rgba(255, 255, 255, 0.3);
  border-top: 8px solid #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
    

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ForecastGrid = styled.div`
  background-color: rgb(152, 200, 255);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const WeatherCard = styled.div`
  background-color: rgb(239, 246, 255);
  width: 200px;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  p {
    margin: 8px 0;
    font-size: 16px;
    color: #333;
  }

  img {
    width: 80px;
    height: 80px;
  }
`;




function Week(props) {
  const dispatch = useDispatch();
  const {weather5days, loading, error} = useSelector((state) => state.weathers);

  

  useEffect(() => {
    dispatch(fetchWeather5days())
  }, [dispatch]);

  console.log(weather5days);

  if (loading) {
    return (
      <LoadingWrapper>
        <Spinner />
        <p>날씨 정보를 불러오고 있어요 ☁️</p>
      </LoadingWrapper>
    );
  }
  if(error){return <p>{error}</p>}

  const noonList = weather5days?.list?.filter((item) =>
    item.dt_txt.includes("12:00:00")
  )||[];

  const getKoreanDay = (dateString) => {
    const date = new Date(dateString);
    const day = date.toLocaleDateString("ko-KR", {weekday:"short"});
    const ymd = date.toISOString().split("T")[0];
    return `${ymd}(${day})`
  };

  return (
    <>
      <ForecastGrid>
        {noonList?.map((li, index) => (
          <WeatherCard key={index}>
            <p>{getKoreanDay(li.dt_txt)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${li.weather[0].icon}@2x.png`}
              alt="날씨 아이콘"
            />
            <p>{li.weather[0].description}</p>
            <p>기온: {Math.round(li.main.temp)}°C</p>
          </WeatherCard>
        ))}
      </ForecastGrid>
    </>
    
  );
}

export default Week;