import React from "react";
import { Banner, Container, Slide } from "./styles";
import { Banners } from "../../data/banners";

export const Carousel: React.FC = () => {
  return (
    <>
      <Container>
        <Slide>
          {Banners.map(banner => {
            return (
              <Banner path={banner.path} />
            )
          })}
        </Slide>
      </Container>
    </>
  )
};
