import { 
  Actions, 
  Add, 
  ButtonAdd, 
  ButtonAddToCart, 
  Container, 
  Footer, 
  Price, 
  Banner, 
  Description,
  Header,
  Type,
  TypeList
} from "./styles";
import { MdOutlineArrowBack } from 'react-icons/md'
const logo = require("../../assets/logo.png")


export function Donut() {
  return (
    <>
      <Container>
        <Header>
          <MdOutlineArrowBack size={25}/>
          <img src={logo} alt="Logo" />
        </Header>
        <Banner />
        <TypeList>
          <Type>
            <p>Tradicional</p>
          </Type>
        </TypeList>
        <Description>
          <h1>Donut de Brigadeiro</h1>
          <p>Recheios: Brigadeiro, cobertura e um toque de amor.</p>
        </Description>
        <Footer>
          <Actions>
            <Price>
              <p>Preço</p>
              <h1>R$ 39,99</h1>
            </Price>
            <Add>
              <ButtonAdd>-</ButtonAdd>
              <p>1</p>
              <ButtonAdd>+</ButtonAdd>
            </Add>
          </Actions>
          <ButtonAddToCart>Adicionar ao carrinho</ButtonAddToCart>
        </Footer>
      </Container>
    </>
  )
}