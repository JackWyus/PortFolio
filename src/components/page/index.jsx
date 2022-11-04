import React from 'react'

import { Aside, Container } from "./index.js";
import { Wrapper } from '../Layout/Wrapper'
import Profile from './components/Aside/Profile.jsx'
import Links from './components/Aside/Links.jsx'
import Technologies from './components/Aside/Technologies.jsx'
import Experience from './components/Aside/Experience.jsx'
import Formação from './components/Aside/Formação.jsx'
import MyProjects from './components/Section/MyProjects.jsx'
import Projects from './components/Section/Projects.jsx';
import RecentPosts from './components/Section/RecentPost.jsx'
import Post from './components/Section/Post.jsx';
function index() {
  return (
    <Wrapper>
      <Aside>
        <Profile />
        <Links />
        <Technologies />
        <Experience />
        <Formação />
      </Aside>

      <Container>
        <MyProjects />
        <div className='container_projects'>
          <Projects />
          <Projects />
        </div>
        <RecentPosts/>
        <Post/>
      </Container>
    </Wrapper>
  );
}

export default index