import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import SearchForm from './SearchForm';
import Today from './Today';
import Week from './Week';

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgb(152, 200, 255);
`; 

const ContentWrap = styled.main`
  flex: 1;
`;

function Main(props) {
  return (
    <>
    <MainStyle>
      <Header />
        <SearchForm />     
        <Today />         
        <Week />          
    </MainStyle>
    
    </>
    
  );
}

export default Main;