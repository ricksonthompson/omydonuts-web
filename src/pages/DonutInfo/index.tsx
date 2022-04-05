import { 
  Container, 
  Banner, 
  Description,
  Header,
  Type,
  TypeList,
  Content
} from "./styles";
import { MdOutlineArrowBack } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

const logo = require("../../assets/logo-donut-colorful.png")


export function DonutInfo() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/donuts")
  }

  return (
    <>
      <Header>
        <button onClick={handleNavigate}>
          <MdOutlineArrowBack size={25}/>
        </button>
        <Link to="/" >
          <img src={logo} alt="Logo" />
        </Link>
      </Header>
      <Container>
        <Content>
          <Banner />
          <TypeList>
            <Type>
              <p>Tradicional</p>
            </Type>
          </TypeList>
          <Description>
            <h1>Brigadeiro</h1>
            <p>Recheio: Brigadeiro, cobertura e um toque de amor.</p>
          </Description>
        </Content>
      </Container>
      <Footer color="#F8D536"/>
    </>
  )
}