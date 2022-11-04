import React from 'react'
import { ContainerPost } from './Post.js'
import picture from '../../../../img/Palhaço.jpg'

function Post() {
  return (
    <ContainerPost>
      <div className="ContainerPost_img">
        <img src={picture} />
      </div>

      <div className="ContainerPost_Contents">
        <div className="ContainerPost_Contents_title">
          <h3>
            Erro adb devices no Genymotion e Android Studio (React Native)Erro
          </h3>
          <p>2 anos atrás</p>
        </div>

        <p>Erro adb devices no Genymotion e Android Studio (React Native)</p>

        <div className="ContainerPost_Contents_lists">
          <ul>
            <li>
              <a>#reactJs</a>
            </li>
            <li>
              <a>#reactjs</a>
            </li>
            <li>
              <a>#javascript</a>
            </li>
            <li>
              <a>#git</a>
            </li>
            <li>
              <a>#css</a>
            </li>
            <li>
              <a>#glsl</a>
            </li>
            <li>
              <a>#c++</a>
            </li>
          </ul>
        </div>
      </div>
    </ContainerPost>
  );
}

export default Post