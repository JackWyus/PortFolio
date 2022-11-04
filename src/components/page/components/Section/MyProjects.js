import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: var(--bg-cards);


  p{
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;
  }
  span{
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`