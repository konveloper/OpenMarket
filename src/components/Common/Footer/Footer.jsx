import React from 'react';
import { Link } from 'react-router-dom';
import IconInsta from 'assets/img/icon-insta.svg';
import Iconfacebook from 'assets/img/icon-fb.svg';
import IconYoutube from 'assets/img/icon-yt.svg';
import {
  ContFooter,
  FooterDiv,
  LinkDiv,
  BtnDiv,
  InstaBtn,
  FacebookBtn,
  YoutubeBtn,
  InfoDiv,
  InfoStrong,
  InfoText,
} from './FooterStyle';

function Footer() {
  return (
    <ContFooter>
      <FooterDiv>
        <LinkDiv>
          <Link
            to='/'
            style={{
              fontSize: '1.4rem',
              lineHeight: '24px',
              marginRight: '2px',
            }}
          >
            호두샵 소개 |
          </Link>
          <Link
            to='/'
            style={{
              fontSize: '1.4rem',
              lineHeight: '24px',
              marginRight: '2px',
            }}
          >
            이용약관 |
          </Link>
          <Link
            to='/'
            style={{
              fontSize: '1.4rem',
              lineHeight: '24px',
              marginRight: '2px',
              fontWeight: '700',
            }}
          >
            개인정보처리방침 |
          </Link>
          <Link
            to='/'
            style={{
              fontSize: '1.4rem',
              lineHeight: '24px',
              marginRight: '2px',
            }}
          >
            전자금융거래약관 |
          </Link>
          <Link
            to='/'
            style={{
              fontSize: '1.4rem',
              lineHeight: '24px',
              marginRight: '2px',
            }}
          >
            청소년보호정책 |
          </Link>
          <Link
            to='/'
            style={{
              fontSize: '1.4rem',
              lineHeight: '24px',
              marginRight: '2px',
            }}
          >
            제휴문의
          </Link>
          <BtnDiv>
            <InstaBtn type='button'>
              <img src={IconInsta} alt='' />
            </InstaBtn>
            <FacebookBtn type='button'>
              <img src={Iconfacebook} alt='' />
            </FacebookBtn>
            <YoutubeBtn type='button'>
              <img src={IconYoutube} alt='' />
            </YoutubeBtn>
          </BtnDiv>
        </LinkDiv>
        <InfoDiv>
          <InfoStrong style={{ fontWeight: '700' }}>(주)Shop</InfoStrong>
          <InfoText>행복도 행복시 행복로 79</InfoText>
          <InfoText>사업자 번호 : 000-0000-0000 | 통신판매업</InfoText>
          <InfoText>대표: 김 곤</InfoText>
        </InfoDiv>
      </FooterDiv>
    </ContFooter>
  );
}

export default Footer;