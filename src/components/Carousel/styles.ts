import styled from 'styled-components';

interface BannerProps {
  path: string
}

export const Container = styled.div`
  height: max-content;
  margin-top: 20px;
  width: 100vw;
`;

export const Slide = styled.div`
  display: flex;
  overflow-x: auto;
  height: 100%;

  ::-webkit-scrollbar {
    width: 0;
  }
`

export const Banner = styled.div<BannerProps>`
  background-color: #E80B8C;
  background-image: url(${props => props.path});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 70%;
  flex: none;
  margin-right: 10px;
  border-radius: 4px;
  min-height: 120px;
  transition: opacity .2s ease-out;
`
