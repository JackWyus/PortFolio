import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 3rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: var(--bg-cards);
  
  @media (max-width: 1245px){
    padding-inline: 2rem;
  }

  ul{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 2.5rem;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.6rem;
    /* background-color: aqua; */

    li{
      display: flex;
      align-items: center;
      list-style-type: none;
      cursor: pointer;
      transition: 0.3s;
      /* background-color: aquamarine; */

      svg{
        font-size: 2.4rem;
      }
      a{
        margin-left: 2rem;
      }

      :hover{
        color: white;
      }
    }
  }
`