import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: start;
  
  padding: 3rem;

  border-radius: 2rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: var(--bg-cards);
  @media(max-width: 750px){
    width: 100%;
  }


  .Container_titulo_Project{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
  }
  
  #description{
    font-size: 1.6rem;
    margin-block: 2.2rem 4rem;
  }

  #icons{
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  .icon{
    display: flex;
    align-items: center;
    gap: 1rem;
    /* background-color: antiquewhite; */
  }

  #js{
    display: flex;
    align-items: center;
    gap: 1rem;

    #circleYellow{
      width: 15px;
      height: 15px;
      border: 2px solid ;
      border-radius: 50%;
      background-color: yellow;
    }
  }
`