import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetToday } from '../features/today/todaySlice';
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

function Today(props) {
  const dispatch = useDispatch();
  const {getToday, loading, error} = useSelector((state) => state.today);


  useEffect(() => {
    dispatch(fetchGetToday)
  }, [dispatch]);
  
  console.log(getToday)
  
  if(loading){return <p>loading...</p>}
  if(error){return <p>{error}</p>}
  return (
    <>
      {getToday&&(
        <TestText>
        {/* <p>
        오늘의 날씨
        </p> */}
        {getToday.map((today) => (
          <li>today</li>
        )) }
      </TestText>
      )}
    </>
    
  );
}

export default Today;