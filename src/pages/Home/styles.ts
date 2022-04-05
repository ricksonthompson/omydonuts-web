import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    max-width: 80%;
    padding-top: 20px;
    padding-left: 20px;
  }

  img {
    width: 250px;
    height: auto;
  }

  h1 {
    padding-top: 10px;
    text-align: center;
  }

  p {
    padding-top: 10px;
    text-align: center;
    color: #9E9E9B;
    align-self: center;
    align-content: center;
  }

  button {
    padding-top: 10px;
    border: 1px solid #E80B8C;
    padding: 5px 20px;
    border-radius: 5px;
    background-color: transparent;
    margin-bottom: 30px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
    
    a {
      color: #E80B8C;
      text-decoration: none;
      font-size: 16px;
    }
  }
`
