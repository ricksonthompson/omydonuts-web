import React from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { Links, SocialNetworks, Container } from "./styles";
import FooterProps from "../../dto/footer.dto";

export const Footer: React.FC<FooterProps> = ({ color, textColor }) => {
  return (
    <>
     <Container color={color}>
        <SocialNetworks textColor={textColor}>
          <h2>Nossas redes sociais!</h2>
          <Links>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/omydonuts_/">
              <BsInstagram size="30" color="#E80B8C"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/omydonuts">
              <BsFacebook size="30" color="#E80B8C"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5592999963038&text=Ol%C3%A1!!!%20Meu%20nome%20%C3%A9%20(digite%20seu%20nome).%20Ajude-me%20a%20encomendar%20meus%20donuts%F0%9F%8D%A9">
              <BsWhatsapp size="30" color="#E80B8C"/>
            </a>
          </Links>
        </SocialNetworks>
        <p>© Copyright {new Date().getFullYear()} Ó My Donuts.<br />
        Todos os direitos reservados.</p>
      </Container>
    </>
  )
}