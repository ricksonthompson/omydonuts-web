import React from "react";
import { useTransition, animated } from "react-spring";
import { Footer } from "../../components/Footer";
import { SideBar } from "../../components/SideBar";
import { Container, Card, Banner, Description, Ingredients, Tags, Tag } from "./styles";

export const Donuts: React.FC = () => {

  const transitions = useTransition([
    <Card>
      <Banner />
      <Description>
        <Ingredients>
          <h2>Ninho</h2>
          <p>Chocolate branco e leite ninho.</p>
        </Ingredients>
        <Tags>
          <Tag>C/S Recheio</Tag>
          <Tag>Tam: M</Tag>
        </Tags>
      </Description>
  </Card>,
  <Card>
  <Banner />
  <Description>
    <Ingredients>
      <h2>Chocolate</h2>
      <p>Chocolate branco e leite ninho.</p>
    </Ingredients>
    <Tags>
      <Tag>C/S Recheio</Tag>
      <Tag>Tam: M</Tag>
    </Tags>
  </Description>
</Card>
  ],{
    from: { opacity: 0, transform: "translateY(50px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(50px)" }
  });

  return (
    <>
      <SideBar />
      <Container>
        <h1>Nossos deliciosos sabores!</h1>
        {transitions((props, item) => (
          <animated.div style={props}>
            { item }
          </animated.div>
        ))}
      </Container>
      <Footer color="#FAFAFB"/>
    </>
  );
}
