import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather5days, fetchWeatherToday } from '../features/today/todaySlice';

function SearchForm(props) {
  const [ city, setCity ] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if(!city) return;
    dispatch(fetchWeatherToday(city));
    dispatch(fetchWeather5days(city));
  };

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <input
        type="text"
        placeholder="도시명을 입력하세요"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          padding: '10px',
          borderRadius: '10px',
          width: '200px',
          border: '1px solid #ccc',
        }}
      />
      <button 
        onClick={handleSearch}
        style={{
          marginLeft: '10px',
          padding: '10px 20px',
          borderRadius: '10px',
          backgroundColor: '#3399ff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        검색
      </button>
    </div>
  );
}

export default SearchForm;