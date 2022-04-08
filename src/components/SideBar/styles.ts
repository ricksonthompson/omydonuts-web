import styled from 'styled-components';

interface ContainerProps {
  isActive: boolean
  logoIsVisible?: boolean
}

export const Container = styled.div<ContainerProps>`
  
  .navbar {
    background-color: #FFFFFF;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-box-shadow: 0px 4px 15px -3px #9E9E9B; 
    box-shadow: 0px 4px 15px -3px #9E9E9B;

    img {
      width: 50px;
      height: auto;
      margin-right:20px;
      ${props => props.logoIsVisible === false ? "visibility: hidden;" : ""}
    }
  }

  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background-color: none;
  }

  .nav-menu {
    background-color: #FFFFFF;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: start;
    flex-direction: column;
    position: fixed;
    top: 0;
    transition: 850ms;
    z-index: 1;
    -webkit-box-shadow: 11px 0px 13px -7px rgba(87,87,85,0.3); 
    box-shadow: 11px 0px 13px -7px rgba(87,87,85,0.3);
    ${(props) => props.isActive === false ? "left: -100%;" : ""}
  }

  .nav-menu.active {
    transition: 350ms;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }

  .nav-text a {
    text-decoration: none;
    color: #E80B8C;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  .nav-text a:hover {
    opacity: 0.6;
  }

  .nav-menu-items {
    width: 100%;
  }

  .navbar-toggle {
    background-color: #FFFFFF;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  span {
    margin-left: 16px;
  }
`;
