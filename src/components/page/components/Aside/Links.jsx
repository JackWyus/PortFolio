import React from 'react'
import { Container } from './Links.js'

import { FaMapMarkerAlt, FaSuitcase } from 'react-icons/fa'
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

function Links() {
  return (
    <Container>
      <ul>
        <li>
          <FaMapMarkerAlt />
          <a>Brazil</a>
        </li>
        <li>
          <FaSuitcase />
          <a>RocketSeat</a>
        </li>
        <li>
          <FiGithub />
          <a>Github</a>
        </li>

        <li>
          <FiLinkedin />
          <a>Vinicios</a>
        </li>
        <li>
          <FiTwitter />
          <a>Twiter</a>
        </li>
        <li>
          <BsGlobe />
          <a>https://google.com//</a>
        </li>
        <li>
          <HiOutlineMail />
          <a>teste@gmail.com</a>
        </li>
      </ul>
    </Container>
  );
}

export default Links