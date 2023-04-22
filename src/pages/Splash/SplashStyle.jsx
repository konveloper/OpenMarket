import styled, { keyframes } from 'styled-components';
import { Cont } from 'styles/GlobalStyles';

const splashFade = keyframes`
  0% {
    opacity: 1;
    top:50%;
  }
  50%{
    opacity: 1;
    top:50%;
  }
  100% {
    opacity: 0;
    top:40%;
  }
`;

const growUp = keyframes`
  0% {
    bottom: -30px;
  }
  30%{
    bottom: 2px;
  }
  100% {
    bottom: 2px;
  }
`;

const SplashCont = styled.div`
  ${Cont}
  text-align: center;
  color: var(--main-grey);
  margin-bottom: 100px;
  background: linear-gradient(
    334deg,
    rgb(141, 176, 250),
    rgb(200, 161, 255),
    rgb(255, 127, 172)
  );
  animation: 2.5s ${splashFade} ease-out;
`;

const LogoImg = styled.img`
  width: 238px;
  height: 74px;
  margin: 250px 0 auto;
  animation: 0.5s ${growUp} ease-out;
`;

const LogoText = styled.p`
  margin-top: 100px;
  font-size: 2rem;
  color: #fff;
  animation: 0.5s ${growUp} ease-out;
`;

export { SplashCont, LogoImg, LogoText };
