import styled from 'styled-components';

export const Container = styled.article`
  max-width: 37.43rem;
  margin-left: 0.563rem;
  margin-right: 0.563rem;
  margin-bottom: 3rem;
  border-radius: 1.063rem;
  padding: 0.2rem 1.2rem;
  display: flex;
  flex-direction: column;

  img {
    border-radius: 1rem;
    cursor: pointer;
  }

  .actions {
    margin-top: -4.375rem;
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 0.625rem;
    z-index: 1000;

    img {
      width: 1.875rem;
      height: 1.875rem;
    }

    .action-button {
      border-radius: 50%;
      background-color: #FFFFFF;
      width: 3.125rem;
      height: 3.125rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.938rem;
    }
  }

  h2 {
    font-family: Ubuntu, sans-serif;
    color: #363636;
    font-size: 1.2rem;
    font-weight: 200;
    margin-top: 0.68rem;
  }

  #resume {
    margin-top: 0.68rem;
    margin-bottom: 0.68rem;
    font-family: ubuntu;
    color: #6C6868;
    font-size: 0.9rem;
  }
 
  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: .015rem solid #DCDCDC; 

    p,span {
    margin-top: 0.1rem;
    font-family: ubuntu;
    color: #6C6868;
    font-size: 1rem;
    line-height: 1.875rem;
    }
  }

  .infoEnd {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .value {
      display: flex;
    }
    
    p {
      font-weight: bold;
      margin-top: 0.1rem;
      font-family: ubuntu;
      color: #363636;
      font-size: 1rem;
      line-height: 1.875rem;
    }
    span {
      &:first-child {
        font-weight: 50;
        margin-top: 0.1rem;
        font-family: ubuntu;
        color: #363636;
        font-size: 1rem;
        line-height: 1.875rem;
      }
    }
    .important-value {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      span{
        font-weight: bold;
        margin-top: 0.1rem;
        font-family: ubuntu;
        color: #0ab473;
        font-size: 1rem;
        line-height: 1.875rem;
      }
    }
  }
`;


export const ActionContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;