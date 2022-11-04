import React from 'react'
import { AiFillFolderOpen, AiOutlineStar } from "react-icons/ai";
import {BiGitBranch} from 'react-icons/bi';
import { Container } from './Projects.js';

function Projects() {
  return (
    <Container>
      <section className="Container_titulo_Project">
        <AiFillFolderOpen size={25} />
        <p>my-onix</p>
      </section>

      <p id='description'>Consulte os códigos de erro que aparecem no painel do veículo Onix.</p>
      
      <div id='icons'>
        <div className='icon'>
          <AiOutlineStar size={20} />
          100
          <BiGitBranch size={20} />
          100
        </div>

        <div id="js">
          <p id="circleYellow"></p>
          <p >JavaScript</p>
        </div>
      </div>
    </Container>
  );
}

export default Projects