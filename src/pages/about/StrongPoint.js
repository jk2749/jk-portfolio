import React from 'react';
import styled from 'styled-components';

export function AboutSection({ top,backgroundColor, src, title, description, isRight = false }) {
  return (
    <Wrapper isRight={isRight} top={top} backgroundColor={backgroundColor}>
      <div className={'text'}>
        <img src={src} alt={'icon'}/>
        {title}
      </div>
      <div className={'description'}>
        {description}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  top: ${props => props.top};
  ${props => (props.isRight ? 'right' : 'left')}: 12vw;
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.isRight ? 'flex-end' : 'flex-start')};
  
  .text {
    margin-bottom: 1.5vw;
    position: relative;
    font-size: 1.8vw;
    width: max-content;
  
    img {
      position: absolute;
      top: -1.5vw;
      left: 50%;

      transform: translate(-50%, -100%);
      width: 8vw;
    }
  }
  
  .description {
    font-size: 1.55vw;
    white-space: pre;
    text-align: ${props => (props.isRight ? 'right' : 'left')};
  }
`
