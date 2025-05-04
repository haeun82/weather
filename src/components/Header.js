import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const WeatherHeader = styled.div`
  background-color: rgb(152, 200, 255);
  margin: 0;
  padding: 0 30px 20px;
  
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
  }

  .logo {
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }

  .icon {
    font-size: 32px;
    color: #fff;
    cursor: pointer;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin-top: 20px;
  padding: 0;

  li a {
    font-size: 20px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: rgb(27, 132, 252);
    }
  }
`;

function Header(props) {
  const navigate = useNavigate();
  return (
    <>
      <WeatherHeader>
        <span className="logo" onClick={() => navigate('/')}>Weather</span>
    </WeatherHeader>
    </>
  );
}

export default Header;