import React from 'react';

import styled from 'styled-components';
import { TitleSection } from './TitleSection';
import { AboutSection } from './StrongPoint';
import StrongPointImage from '../../assets/icon-strong-point.png';
import LifeMottoImage from '../../assets/icon-bulb.png';
import CommunicationImage from '../../assets/icon-talk.png';

export class About extends React.Component {
  render() {
    return (
      <Wrapper>
        <TitleSection/>

        <div className="strong">
          <img src={StrongPointImage}/>
          <div className="subtitle">STRONG POINTS</div>
          <div className="text">
          저는 새로운 분야를 배우는 것에 흥미를 느낍니다.<br/>
          비록 익히는 과정이 남들보다 빠르진 않지만<br/>
          저만의 속도로 꾸준히 하는 것이 저의 강점입니다.</div>
        </div>
        <div className="motto">
          <img src={LifeMottoImage}/>
          <div className="subtitle">LIFE MOTTO</div>
          <div className="text">
          문제의 해결만큼 과정또한 중요하다고 생각합니다.<br/>
          과정이 힘들고 지겨웠다면 다른 문제가 생겼을때<br/>
          적극적인 자세로 임할수 없습니다.<br/>
          저는 문제 해결 과정도 긍정적인 자세로 임할 것입니다.</div>
        </div>
        <div className="community">
          <img src={CommunicationImage}/>
          <div className="subtitle">COMMUNICATION</div>
          <div className="text">
          혼자 성장하고 발전해 나가는 것은 한계가 있습니다.<br/>
          같이 발전하는 것이 더 깊이 있는 성장이라 생각합니다.<br/>
          주변 환경에서 좋은 영향을 주고받을 수 있도록 노력하겠습니다.
          </div>
        </div>
        {/* <AboutSection
          backgroundColor={'red'}
          top={'75vw'}
          src={StrongPointImage}
          title={'STRONG POINTS'}
          description={'저는 새로운 분야를 배우는 것에 흥미를 느낍니다.\n' +
          '비록 익히는 과정이 남들보다 빠르진 않지만\n' +
          '저만의 속도로 꾸준히 하는 것이 저의 강점입니다.'}
        />
        <AboutSection
          top={'101vw'}
          src={LifeMottoImage}
          title={'LIFE MOTTO'}
          description={'문제의 해결만큼 과정또한 중요하다고 생각합니다.\n' +
          '과정이 힘들고 지겨웠다면 다른 문제가 생겼을때\n' +
          '적극적인 자세로 임할수 없습니다.\n' +
          '저는 문제 해결 과정도 긍정적인 자세로 임할 것입니다.'}
          isRight={true}
        />
        <AboutSection
          top={'130vw'}
          src={CommunicationImage}
          title={'COMMUNICATION'}
          description={'혼자 성장하고 발전해 나가는 것은 한계가 있습니다.\n' +
          '같이 발전하는 것이 더 깊이 있는 성장이라 생각합니다.\n' +
          '주변 환경에서 좋은 영향을 주고받을 수 있도록 노력하겠습니다.'}
        /> */}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100vw;
  height: 150vw;
  position: relative;
  
  .strong img{
    width:150px;
  }
  .subtitle{
    font-size: 1.35vw;
    margin: 37px 0;
  }
  .strong{
    position: absolute;
    top:960px;
    height:510px;
    width:100vw;
    background-color: #dbe6f0;
    padding: 60px 303px;
    font-family: 'Noto Sans KR' sans-serif;
  }
  .text{
    font-size:1.146vw;
  }
  .motto{
    position: absolute;
    top:1470px;
    height:510px;
    width:100vw;
    text-align: right;
    padding: 50px 303px;
    font-family: 'Noto Sans KR' sans-serif;
  }
  .motto img{
    width:150px;
  }
  .community img{
    width:150px;
  }
  .community{
    position: absolute;
    top:1980px;
    height:510px;
    width:100vw;
    background-color: #dbe6f0;
    padding: 60px 303px;
    font-family: 'Noto Sans KR' sans-serif;
  }
`

