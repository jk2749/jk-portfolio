import React from 'react';
import { withRouter } from 'react-router-dom';
import LogoImage from '../../assets/logo-white.png';
import LogoBlackImage from '../../assets/logo-black.png';
import styled from 'styled-components';
import { isWhiteTextPage, MAIN_PATH } from './constants';

function Logo({ history, location }) {
  return(
   <Wrapper
     onClick={() => history.replace(MAIN_PATH)}
     src={isWhiteTextPage(location.pathname) ? LogoImage : LogoBlackImage }
     alt={'logo'}
     className={'logo'}
   />
  );
}

export default withRouter(Logo);

const Wrapper = styled.img`
  position: fixed;
  top: 18px;
  left: 40px;
  width: 100px;
  z-index: 50;
  color: ${(props) => props.color};
  cursor: pointer;
`
