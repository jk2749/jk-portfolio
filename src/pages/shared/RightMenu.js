import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Menu from '../../assets/menu.svg';
import MenuBlack from '../../assets/menu-black.svg';
import { isWhiteTextPage } from './constants';

class RightMenu extends React.Component {
  moveToLink(link) {
    this.props.history.replace(link);
  }

  render() {
    const color = this.getColor();
    return (
      <Wrapper color={color}>
        <img src={color === 'white' ? Menu : MenuBlack} className={'icon'} alt={'menu-icon'}/>
        <div
          className={'menu-item'}
          onClick={() => this.moveToLink('about')}
        >
          about
        </div>
        <div
          className={'menu-item'}
          onClick={() => this.moveToLink('works')}
        >
          portfolio
        </div>
        <div
          className={'menu-item'}
          onClick={() => this.moveToLink('contact')}
        >
          contact
        </div>
      </Wrapper>
    );
  }

  getColor() {
    if (isWhiteTextPage(this.props.location.pathname)) {
      return 'white';
    }
    return 'black'
  }
}

export default withRouter(RightMenu)

const Wrapper = styled.div`

  position: fixed;
  top: 0;
  right: 0;
  // background-color: black;
  
  width: 100px;
  height: 100vh;
  
  color: ${(props) => props.color};
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  padding-left: 30px;
  padding-top: 40px;
  z-index: 100;
  
  .icon {
    position: absolute;
    top: 40px;
    left: 10px;
    width: 30px;
  }
  
  .menu-item {
    margin: 70px 150px 150px 0;
    transform: rotate(90deg);
    cursor: pointer;
    font-size:1.5vw;
  }
`
