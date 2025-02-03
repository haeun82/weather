import React from 'react';
import styled from 'styled-components';

const Made = styled.div`
  width: 100%;
  height: 50px;
    p {
      text-align: center;
    }
`;
function Footer(props) {
  return (
    <Made>
      <p>하은이가 만듬</p>
    </Made>
  );
}

export default Footer;