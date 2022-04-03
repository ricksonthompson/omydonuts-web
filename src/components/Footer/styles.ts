import styled from 'styled-components';
import FooterProps from '../../dto/footer.dto';

export const Container = styled.footer<FooterProps>`
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  right: 0;
  justify-content:  center;
  align-items: center;
  height: max-content;
  margin-top: auto;
  padding: 20px;

  p {
    color: rgba(0,0,0,.7); 
    text-shadow: 0 1px rgba(255, 255, 255, 0.1);
  }
`

export const SocialNetworks = styled.div<{ textColor?: string }>`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  
  h2 {
    color: ${props => props.textColor ? props.textColor : "rgba(0,0,0,.7)"};
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`
