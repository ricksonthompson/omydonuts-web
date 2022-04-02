import styled from 'styled-components';
const img = require('../../assets/omd-donut-ninho.jpg')

export const Container = styled.div`
  background-color: #E80B8C;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;

  h1 {
    color: #ffffff;
    margin-bottom: 20px;
    width: 80%;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  height: max-content;
  padding: 15px;
  display: flex;
  width: 100%;
  border-radius: 10px;
  align-self: center;
  -webkit-box-shadow: 9px 6px 12px 4px rgba(87,87,85,0.45); 
  box-shadow: 9px 6px 12px 4px rgba(87,87,85,0.45);
`;

export const Banner = styled.div`
  background-color: #E80B8C;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  width: 150px;
  height: 150px;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Ingredients = styled.div`
  margin-left: 20px;

  p {
    color: #9E9E9B;
  }
`

export const Tags = styled.div`
  display: flex;
  margin-left: 20px;
`

export const Tag = styled.button`
  background-color: transparent;
  border: 2px solid #F8D536;
  border-radius: 25px;
  padding: 5px;
  color: #F8D536;
  margin-right: 5px;
`

export const Footer = styled.footer`
  background-color: #F5F5F5;
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

export const SocialNetworks = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`
