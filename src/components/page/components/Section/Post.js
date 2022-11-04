import styled from "styled-components";

export const ContainerPost = styled.div`
  display: flex;
  gap: 3rem;
  padding: 3rem;
  align-items: center;
  border-radius: 2.5rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: var(--bg-cards);

  .ContainerPost_img{
    width: 13rem;
    height: 13rem;
    /* background-color: antiquewhite; */
    @media(max-width: 901px){
      display: none;
    }
  }
  .ContainerPost_img img{
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }

  .ContainerPost_Contents p{
    margin-bottom: 1rem;
  }

  .ContainerPost_Contents_title{
    margin-bottom: 3rem;
  }
  .ContainerPost_Contents_title h3{
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.3rem;
    margin-bottom: 0.5rem;
  }
  .ContainerPost_Contents_title p{
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  .ContainerPost_Contents_lists ul{
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;
  }
  .ContainerPost_Contents_lists ul li a{
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;
    cursor: pointer;
    :hover{
      color: #ffff;
    }
  }

`