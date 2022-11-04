import styled from "styled-components";

export const Aside = styled.aside`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  /* background-color: blue; */

  @media (max-width: 1365px){
    display: none;
  }
`

export const Container = styled.div`
  width: 77%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  /* background-color: black; */
  @media(max-width: 1365px){
    width: 100%;
  }

  .container_projects{
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: beige; */
    @media(max-width: 750px){
      gap: 1.5rem;
      justify-content: center;
      flex-direction: column;
    }
  }
`