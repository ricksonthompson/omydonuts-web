import React from "react";
import { Footer } from "../../components/Footer";
import { Container, Card, Banner, Description, Ingredients, Tags, Tag } from "./styles";

export const Donuts: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Nossos deliciosos sabores!</h1>
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
        </Card>

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
      </Container>
      <Footer color="#F5F5F5"/>
    </>
  );
}
