import React from 'react'

import { Container } from "./Profile.js";
import Picture from "../../../../img/Palhaço.jpg";

function Profile() {
  return (
    <Container>
      <div>
        <img src={Picture} alt="Foto de Perfil" />
      </div>
      <p>Vinicios Macario</p>
      <span>FROND-END</span>
    </Container>
  );
}

export default Profile;