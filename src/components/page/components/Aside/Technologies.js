import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: var(--bg-cards);
  
  div{
    margin-top: 2rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: row;
    justify-content: flex-start;
    /* background-color: aqua; */
    p{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 8.6rem;
      height: 2.5rem;
      border-radius: 2rem;
      color: black;
      font-size: 1.1rem;
      line-height: 1.5rem;
      font-weight: 700;
      text-align: center;
      background-color: var(--bg-techs);
      transition: 0.3s;
      :hover{
        color: white;
        background-color: black;
      }
    }
  }
`