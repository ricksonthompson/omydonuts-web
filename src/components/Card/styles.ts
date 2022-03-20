import styled from 'styled-components'

export const Container = styled.div`
  :root {
    --blue: #07B7AD;
    --pink: #E80B8C;
    --yellow: #F8D536;
  }

  width: 45%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 50px 9px rgba(0,0,0,0.1); 
  box-shadow: 0px 0px 50px 9px rgba(0,0,0,0.1);
  border-radius: 15px;
  padding-bottom: 10px;
  background-color: white;
  margin-bottom: 10px;

  p {
    margin-bottom: 10px;
  }
`

export const Details = styled.h1`
  display: flex;
  width: 90%;
`

export const Price = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #07B7AD;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 500;
`

export const Banner = styled.div`
  :root {
    --blue: #07B7AD;
    --pink: #E80B8C;
    --yellow: #F8D536;
  }

  background-color: var(--yellow);
  width: 90%;
  height: 70%;
  margin-top: 10px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  position: relative;

  img {
    max-width: 75%;
    max-height: 75%;
    align-self: center;
    justify-self: center;

  }

  button {
    border-radius: 50%;
    border: 0;
    padding: 5px;
    align-self: flex-end;
    margin-right: 5px;
    margin-top: 5px;
    align-items: center;
  }
`

export const Paragraph = styled.p`
  color: #202124;
  font-size: 20px;
`

export const Actions = styled.button`
  :root {
    --blue: #07B7AD;
    --pink: #E80B8C;
    --yellow: #F8D536;
  }

  border: 0;
  background-color: transparent;
`

export const ContainerActions = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`