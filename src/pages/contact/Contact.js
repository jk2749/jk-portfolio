import React from 'react';
import styled from 'styled-components';

import Background from '../../assets/contact-background.png';

export function Contact() {
  return (
    <Wrapper>
      <img
        src={Background}
        alt={'background'}
        className={'background'}
      />
      <div
        className={'white-box'}
      >
        <div className={'title'}>
          CONTACT
        </div>
        <div className={'content'}>
          <div className={'item'}>
            E-mail
            <div>jk2749@naver.com</div>
          </div>
          <div className={'bar'}/>
          <div className={'item'}>
            Phone-number
            <div>010-5883-2749</div>
          </div>
          <div className={'bar'}/>
          <div className={'item'}>
            Address
            <div>서울시 강북구 삼양로 24길</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  
  .background {
    position: absolute;
    width: 100%;
    min-height: 100%;
    z-index: -1;
  }
  
  .white-box {
    position: absolute;
    top: 15.5vw;
    left: 50%;
    
    transform: translateX(-50%); 
    
    background-color: white;
    width: 76vw;
    height: 30vw;
    opacity: 0.74;
    z-index: 5;
  }
  
  .title {
    margin-top: 4.2vw;
    margin-left: 3.15vw;
    font-size: 3.1vw;
  }
  
  .content {
    margin-top: 6.8vw;
    width: 100%;
    height: 8vw;
    
    display: flex;
  }
  
  .item {
    width: 33.3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    font-size: 1.87vw; 
    
    div {
      margin-top: 2.85vw;
      font-weight: bold;
    }
  }
  
  .bar {
    border-right: solid 1px black;
  }
`
