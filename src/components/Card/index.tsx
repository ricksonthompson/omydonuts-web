import { MdFavoriteBorder } from 'react-icons/md'
import { RiShoppingCartLine } from 'react-icons/ri'
import { Banner, Details, Actions, ContainerActions, Paragraph, Price, Container} from './styles'

export function Card() {
  return (
    <>
      <Container>
      <Banner>
        <button><MdFavoriteBorder size={20} color="EB558F"/></button>
        <img src={require("../../assets/donut-pink.png" )}
        alt="avatar"
        />
      </Banner>
      <Details>
        <Paragraph>Brigadeiro</Paragraph>
      </Details>
      <ContainerActions>
        <Price>R$ 7,99</Price>
        <Actions><RiShoppingCartLine color="#EB558F" size={20}/></Actions>
      </ContainerActions>
    </Container>
  </>
  )
}