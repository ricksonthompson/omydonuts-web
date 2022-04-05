import styled from 'styled-components';
const img = require('../../assets/omd-donut-ninho.jpg')

export const Container = styled.div`
  background-color: #E80B8C;
  min-height: 100vh;
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
  margin-bottom: 20px;
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
  border: 2px solid #07B7AD;
  border-radius: 25px;
  padding: 5px;
  color: #07B7AD;
  margin-right: 5px;
`
