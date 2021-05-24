import styled from 'styled-components';

export const SubMenu = styled.div`
  width: 100%;
  padding: 1rem 7.5rem;
  font-family: ubuntu, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: Ubuntu, sans-serif;
    color: #363636;
    margin-bottom: 0.5rem;
  }

  span{
    color: #808080;
  }

  .order {
    width: 8rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border-color: #DCDCDC;
    border-width: 0.1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: center;
    font-family: Ubuntu, sans-serif;
    font-size: 1rem;
    color: #4F4F4F;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0.1rem 5.87rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;

  @media only screen and (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

