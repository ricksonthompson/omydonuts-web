import styled from "styled-components";
const img = require('../../assets/omd-donut-ninho.jpg')

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  align-self: center;

  img {
    width: 50px;
    height: auto;
  }

  button {
    border: none;
    background-color: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
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
    width: 100%;
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
  background-color: #07B7AD;
  opacity: 0.5;
  border-radius: 20px;
  color: #FFF;
  font-weight: bold;
`

export const Description = styled.div`
  width: 95%;
  align-self: center;
  margin-top: 10px;

  p {
    color: #35464D;
  }
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