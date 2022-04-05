import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { SideBar } from "../../components/SideBar";
import { Container, Content } from "./styles";

export function Home() {
  return (
    <>
      <SideBar logoIsActive={false}/>
      <Container>
        <Content>
          <div>
            <img src={require("../../assets/logo-donut-colorful.png" )} alt="avatar"/>
          </div>

          <div>
            <h1>Bem-vindo(a) <br/> à Ó My Donuts!</h1>
            <p>Nós temos muitas escolhas para você. Vamos prosseguir e conhecer um pouco mais!</p>
          </div>
          
          <div>
            <button>
              <Link to="/donuts">
                Prosseguir
              </Link>
            </button>
          </div>
        </Content>  
      </Container>
      <Footer color="#F8D536"/>
    </>
  )
}