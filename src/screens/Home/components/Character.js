import React from "react";

import { Container, Image, Name } from "./styles";

function Character({ data: { name, image } }) {
  return (
    <Container>
      <Name>{name}</Name>
      <Image src={image} />
    </Container>
  );
}

export default Character;
