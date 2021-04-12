import Kyeong from '../../assets/photo.jpeg';
import React from 'react';
import styled from 'styled-components';

export function TitleSection() {
  return (
    <Wrapper>
      <img
        src={Kyeong}
        alt={'photo'}
        className={'photo'}
      />
      <div
        className={'title'}
      >
        About<br/>
        <div className={'title-about'}>
          JEA KYEONG LEE
        </div>
        FRONT-END<br/>
        DEVELOPER
      </div>
      <div
        className={'description'}
      >
        {
          '안녕하세요. 프론트 엔드 지원자 이재경 입니다.\n' +
          '어려운 상황에서도 긍정적인 태도로 웃으며\n' +
          '해결해나갔듯이 개발에도 항상 즐거운 마음가짐으로\n' +
          '끊임없이 발전해나가는 개발자가 되도록 노력하겠습니다.'
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 6.6vw;
  right: 17vw;
  width: 40vw;
  
  img {
    width: 100%;
  }
  
  .title {
    position: absolute;
    top: 50%;
    left: -6.5vw;
    
    transform: translate(-100%, -50%);
    
    white-space: pre;
    font-size: 2.5vw;
    
    .title-about {
      margin-bottom: 1vw;
      font-size: 3.75vw;
      line-height: 1.2;
    }
  }
  
  .description {
    position: absolute;
    white-space: pre;
    
    bottom: -1.5vw;
    left: 0;
    
    transform: translateY(100%);
    font-size: 1.35vw;
  }
`
