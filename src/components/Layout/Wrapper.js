import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 100;

  padding: 4rem;
  display: flex;
  justify-content: space-between;
  background-color: var(--body-bg-color);
  
  @media(max-width: 1365px){
    justify-content: center;
  }
`