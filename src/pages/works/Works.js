import React, { createRef, useEffect } from 'react';
import scrollConverter from '@bchteam/scroll-converter';
import styled from 'styled-components';
import * as _ from 'lodash';

import LovingVincent from '../../assets/lovingvincent.png';
import Rouje from '../../assets/rouje.png';
import Renoir from '../../assets/renoir.png';
import ZaraHome from '../../assets/zarahome.png';
import TheLord from '../../assets/thelordoftherings.png';

export function Works() {
  const refObject = createRef();
  const CheckScroll = (e) => {
    const el = document.querySelector('.element-with-horizontal-scrolling');
    const items = document.querySelectorAll('.work-box');
    const scrollPoses = _.map(items, item => item.offsetLeft + item.offsetWidth / 2 - el.clientWidth / 2)
    const result = _.reduce(scrollPoses, (result, pos, index) => {
      const distance = Math.abs(el.scrollLeft - pos);
      if (result.dist > distance) {
        return {
          index,
          dist: distance,
        }
      }
      return result;
    }, { index: -1, dist: 99999 });

    el.scrollTo({
      behavior: 'smooth',
      left: scrollPoses[result.index],
    });
  }

  useEffect(() => {
    const el = document.querySelector('.element-with-horizontal-scrolling');
    scrollConverter.enable(el);

    el.addEventListener('scroll', _.debounce(CheckScroll, 300));
    return () => {
      el.removeEventListener('scroll', _.debounce(CheckScroll, 300));
    }
  });

  return (
    <Wrapper>
      <div className={'title'}>
        portfolio
      </div>
      <div
        ref={refObject}
        className={'element-with-horizontal-scrolling'}
      >
        <div className={'work-boxes'}>
          <div
            className={'work-box'}
            onClick={() => window.open('http://jk2749.dothome.co.kr/lovingvincent/')}
          >
            <img
              src={LovingVincent}
              alt={'work'}
            />
            <h5>multi-parallax</h5>
          </div>
          <div
            className={'work-box'}
            onClick={() => window.open('http://jk2749.dothome.co.kr/zarahome/')}
          >
            <img
              src={ZaraHome}
              alt={'work'}
            />
            <h5>Responsive template</h5>
          </div>
          <div
            className={'work-box'}
            onClick={() => window.open('http://jk2749.dothome.co.kr/rouje/')}
          >
            <img
              src={Rouje}
              alt={'work'}
            />
            <h5>javascript/ jQuery</h5>
          </div>
          <div
            className={'work-box'}
            onClick={() => window.open('http://jk2749.dothome.co.kr/renoir/')}
          >
            <img
              src={Renoir}
              alt={'work'}
            />
            <h5>mobile</h5>
          </div>
          <div
            className={'work-box'}
            onClick={() => window.open('https://jk2749.github.io/movie/')}
          >
            <img
              src={TheLord}
              alt={'work'}
            />
            <h5>API</h5>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  
  .element-with-horizontal-scrolling {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  
  .title {
    position: absolute;
    top: 6vw;
    left: 50%;
    transform: translateX(-50%);
    font-size: 3.12vw;
    text-align: center;
  }
  
  .work-box {
    margin: 0 165px;
    width: 1060px;
    cursor:pointer;
    
    img {
     width: 100%;
      
    }
  }
  
  .work-boxes {
    position: absolute;
    top: 30vw;
    left: 0;
    
    transform: translate(0, -50%);
    
    display: flex;
  }
  h5{
    margin-top:10px;
    font-weight: 500;
    font-size: 30px;
    // text-align:center;
  }
`
