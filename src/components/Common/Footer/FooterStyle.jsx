import styled from 'styled-components';

const ContFooter = styled.section`
  width: 100%;
  height: 250px;
  display: fixed;
  bottom: 0;
  left: 0;
  padding-left: 220px;
  background-color: var(--light-grey);
`;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 900px;
  margin-top: 50px;
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  position: absolute;
  right: 0px;
`;

const InstaBtn = styled.button``;

const FacebookBtn = styled.button``;

const YoutubeBtn = styled.button``;

const LinkDiv = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--sub-grey);
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const InfoStrong = styled.strong`
  color: (sub-grey);
  font-size: 1.4rem;
  line-height: 24px;
`;

const InfoText = styled.small`
  color: (sub-grey);
  font-size: 1.4rem;
  line-height: 24px;
`;

export {
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
};
