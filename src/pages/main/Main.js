import React from 'react';
import styled from 'styled-components';

import Background from '../../assets/main-back.png';
import Logo from '../../assets/logo-white.png';

function Main() {
  return (
    <Wrapper>
      <img
        src={Background}
        alt={'background'}
        className={'background'}
      />
      {/*<img*/}
      {/*  src={Logo}*/}
      {/*  alt={'logo'}*/}
      {/*  className={'logo'}*/}
      {/*/>*/}
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: black;
  
  .background {
    position: absolute;
    width: 100%;
    min-height: 100%;
    z-index: 1;
  }
`
