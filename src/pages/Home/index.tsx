import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { SideBar } from "../../components/SideBar";
import { Button, Container, Content, Section, Topic, TopicWithImage } from "./styles";
const EmojiInLove = require("../../assets/emoji-inlove.png")

export function Home() {
  return (
    <>
      <SideBar logoIsActive={false}/>
      <Container>
        <Content>
          <div>
            <img src={require("../../assets/logo-donut-colorful.png" )} alt="avatar"/>

            <h1>Bem-vindo(a) <br/> à Ó My Donuts!</h1>
            <p>Nós temos muitos sabores para você. Vamos prosseguir e conhecer um pouco mais!</p>
          
            <Button>
              <Link to="/donuts">
                Prosseguir
              </Link>
            </Button>
          </div>
        </Content>  
        <Section>
          <TopicWithImage>
            <img src={EmojiInLove} alt="smile" />
            <h1>Antes de prosseguir, dê uma lida...</h1>
          </TopicWithImage>

          <Topic>
            <h1>Encomendas</h1>
            <p>Devem ser feitas com 24h de antecedência, com excessão quando houver donuts à pronta entrega.</p>
          </Topic>

          <Topic>
            <h1>Entregas</h1>
            <p>São feitas por meio da plataforma de entrega <strong>Bee Delivery</strong> e as taxas também calculadas pela mesma. <br />
              Pagamentos via PIX têm desconto na taxa de entrega.
            </p>
          </Topic>
          
          <h1 className="title">Formas de pagamento:</h1>
          <h1 className="subTitle">dinheiro, cartão e pix.</h1>

          <Topic>
            <h1>OMG!!!</h1>
            <p>Agora você já pode pedir os seus donuts. E vale a dica: Peça sem moderação!</p>
          </Topic>
        </Section>
      </Container>
      <Footer color="#eeeded"/>
    </>
  )
}