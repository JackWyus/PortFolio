import React from 'react'
import { Container } from './Formação.js'

function Experience() {
  return (
    <Container>
      <h3>Formação</h3>
      <ul>
        <li>
          <p className="item">RocketSeat</p>
          <span>2019 - 2019</span>
          <p>GoStack</p>
        </li>
        <li>
          <p className="item">RocketSeat</p>
          <span>2019 - 2019</span>
          <p>Ignite</p>
        </li>
        <li>
          <p className="item">RocketSeat</p>
          <span>2019 - 2019</span>
          <span>Ignite Pro</span>
        </li>
        <li>
          <p className="item">RocketSeat</p>
          <span>2019 - 2019</span>
          <p>Ignite Pro</p>
        </li>
      </ul>
    </Container>
  );
}

export default Experience