import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  div {
    display: flex;
  }

  p {
    color: #35464D;
    font-weight: bold;
  }

  h1 {
    color: #000000;
    margin-left: 50px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  input {
    border-radius: 20px;
    border: 0;
    background-color: #F5F5F5;
    padding: 10px;
    align-self: center;
    width: 80%;
    height: 40px;
    margin-top: 10px;
  }

  .title {
    margin-left: 20px;
  }
`

export const Typograph = styled.h1`
  color: #080808;
  margin-left: 50px;
`
export const CardList = styled.div`
  display: flex;
  width: 80%;
  height: 100vh;
  justify-content: space-between;
  align-self: center;
  margin-top: 20px;
  flex-wrap: wrap;
`
