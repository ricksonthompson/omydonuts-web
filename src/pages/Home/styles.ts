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
  justify-content: center;
  height: max-content;

  div {
    max-width: 80%;
    padding-top: 20px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-family: 'Sora', sans-serif;
      font-weight: 700;
      color: #211C2A;
    }

    img {
      width: 70%;
      height: auto;
      animation: go-back 1s;
    }
  }


  @keyframes go-back {
    0% {
      transform: translateX(100px);
    }

    100% {
      transform: translateX(0);
    }
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
`

export const Button = styled.button`
  padding-top: 10px;
  border: 1.5px solid #E80B8C;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: transparent;
  margin-bottom: 30px;
  transition: filter 0.2s;
  width: 90%;
  margin-top: 10px;

  &:hover {
    filter: brightness(0.9);
  }
  
  a {
    color: #E80B8C;
    text-decoration: none;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }
`

export const Section = styled.section`
  padding: 20px;
  color: #211C2A;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-family: 'Sora', sans-serif;
    font-weight: 700;
    text-align: center;
    color: #E80B8C;
  }
  
  .subTitle {
    font-family: 'Sora', sans-serif;
    font-weight: 700;
    text-align: center;
    color: #211C2A;
    margin-bottom: 30px;
  }
`

export const Topic = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 90%;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    color: #E80B8C;
    font-family: 'Sora', sans-serif;
    font-weight: 700;
  }

  p {
    color: #07B7AD;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
  }
`

export const TopicWithImage = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-bottom: 30px;

  h1 {
    font-family: 'Sora', sans-serif;
    font-weight: 700;
  }

  img {
    width: 50px;
    border: 2px solid white;
    border-radius: 50px; 
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.12);
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.12);
    margin-right: 10px;
  }
`
