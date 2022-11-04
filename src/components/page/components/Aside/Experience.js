import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-block: 3rem;
  padding-inline: 2rem;
  border-radius: 2rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: var(--bg-cards);

  h3{
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  ul{
    margin-left: 4rem;

    /* background-color: aqua; */
    
    li{
      p{
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.8rem;
      }
      span{
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 1.5rem;
      }
    }
  }
`