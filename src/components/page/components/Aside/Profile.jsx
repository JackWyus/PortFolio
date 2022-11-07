import React from 'react';
import axios from 'axios';

import { Container } from "./Profile.js";
import { useState } from 'react';


function Profile() {
    const [user, setUser] = useState({name: '', avatarUrl: ''})

    async function getData(){
      try {
        const response = await axios.get("https://api.github.com/users/JackWyus");
        setUser({
          name: response.data.name,
          avatarUrl: response.data.avatar_url,
        })
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  return (
    <Container>
      <div>
        <img src={user.avatarUrl} alt="Foto de Perfil" />
      </div>
      <p>{user.name}</p>
      <span>FROND-END</span>
    </Container>
  );
}

export default Profile;