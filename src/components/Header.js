import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const WeatherHeader = styled.div`
  /* display: flex;
  justify-content: space-between; */
  margin: 0 30px;
  h1 {
    display: inline;
    font-size: 50px;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
`;

function Header(props) {
  return (
    <WeatherHeader>
      <h1>Weather</h1>
      <Menu>
        <li>
          <Link to="/header/today">오늘의 날씨</Link>
        </li>
        <li>
          <Link to="/header/week">이번주 날씨</Link>
        </li>
      </Menu>

      <Outlet />
    </WeatherHeader>
  );
}

export default Header;