import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';
import styles from './css/Main.module.css';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

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
      <ContentWrap>
        <Outlet />
      </ContentWrap>
      <Footer />
    </MainStyle>
    
    </>
    
  );
}

export default Main;