import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 2rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: var(--bg-cards);

  div{
    width: 13rem;
    height: 13rem;
    margin-bottom: 3rem;
    /* background-color: aquamarine; */
  }

  img{
    height: 100%;
    width: 100%;
    border: 0.2rem solid #00FF00;
    border-radius: 50%;
  }

  p{
    margin-bottom: 1rem;
    font-size: 2.3rem;
    font-weight: 700;
    line-height: 3rem;
  }
  
  span{
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 1.6rem;
  }
`