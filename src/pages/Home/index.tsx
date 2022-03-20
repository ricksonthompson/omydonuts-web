import { Container, Header, Typograph, CardList } from "./styles";
import { HiOutlineMenuAlt4, HiOutlineLocationMarker } from 'react-icons/hi'
import { MdOutlineExpandMore } from 'react-icons/md'
import { Card } from "../../components/Card";

export function Home() {
  return (
    <>
      <Container>
        <Header>
          <HiOutlineMenuAlt4 />
          <div>
            <HiOutlineLocationMarker color="#EB558F" />
            <p>Manaus, Am</p>
            <MdOutlineExpandMore color="##e76c9b"/>
          </div>
          <img src={require("../../assets/profile.jpeg" )}
          alt="avatar"
          />
        </Header>
          <Typograph>Encomendas<br/> disponíveis!</Typograph>
          <input type="search" value="Encontre um sabor" />
        <CardList>
          <Card />
          <Card />
        </CardList>
      </Container>
    </>
  )
}