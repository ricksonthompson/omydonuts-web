import styled from "styled-components";
const img = require('../../assets/post1.jpg')

export const Container = styled.div`
  img {
    width: 100px;
    height: auto;
  }

  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 95%;
  align-self: center;

  img {
    width: 100px;
    height: auto;
  }
`

export const Banner = styled.div`
  display: flex;
  background-color: #E80B8C;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 95%;
  height: 40%;
  align-self: center;
  border-radius: 25px;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
    height: auto;
  }
`
export const TypeList = styled.div`
  width: 95%;
  height: max-content;
  align-self: center;
  align-items: center;
  margin-top: 20px;
  justify-content: flex-start;
`

export const Type = styled.div`
  width: max-content;
  padding: 10px;
  background-color: #FFF7BD;
  border-radius: 20px;
  color: #F8D536;
  font-weight: bold;
`

export const Description = styled.div`
  width: 95%;
  align-self: center;
  margin-top: 15px;
`

export const Footer = styled.footer`
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  right: 0;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  justify-content:  center;
  align-items: center;
  height: 30vh;
  margin-top: auto;

  button {
    background-color: #35464D;
    border: 0;
    border-radius: 10px;
    padding: 10px;
    color: white;
  }
`
 
export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 20px;
` 
export const Add = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  justify-content: space-between;
` 
export const ButtonAdd = styled.div`
  background-color: white;
  border: 0;
  border-radius: 100px;
  padding: 10px;
  color: white;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #07B7AD;
  -webkit-box-shadow: 19px 18px 25px -10px #8F8F8F; 
  box-shadow: 19px 18px 25px -10px #8F8F8F;
`

export const AddToCart = styled.div`
  display: flex;
  align-items: center;
` 

export const ButtonAddToCart = styled.div`
  background-color: #07B7AD;
  border: 0;
  border-radius: 100px;
  padding: 10px;
  color: white;
  height: 50px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 25px;
`

export const Price = styled.div`
`