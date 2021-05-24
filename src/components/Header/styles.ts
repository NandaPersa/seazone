import styled from 'styled-components';

export const Container = styled.header `
  width: 100%;
  height: 3rem;
  background-color: #151926;
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 6.5rem;
  font-family: Ubuntu, sans-serif;
  font-size: 1.10rem;

  @media only screen and (max-width: 800px) {
    padding-right: 0;
  }

  img {
    height: 1.70rem;
    width: 10rem;
    margin-right: 1rem;
    cursor: pointer;
  }

  ul {
    display: flex;

    li {
      list-style-type: none;

      a {
        padding-top: 0.85rem; 
        padding-bottom: 0.80rem;
        text-decoration: none;
        color: #ffffff;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        display: inline-block;
      }

      &.active a{
        border-bottom: 0.2rem solid #e93f3d !important;
      }

      &:hover {
        background-color: #282e43; 
      }

      .menu-desktop {
        display: block;
      }
    }
  }

  .menu {
    color: #ffffff;
    cursor: pointer;
    visibility: hidden;
    margin-left: 20%;
    margin-right: 2rem;
  }

  @media only screen and (max-width: 800px) {
    ul {
      flex-direction: column;
      background-color: #151926;
      width: 25rem;
      height: auto;
      z-index: 999;
      margin-top: 12.5rem !important;
      right: 0 !important;

      &.menu-desktop {
        display: none;
      }
    }

    .menu {
      visibility: visible;
    }
  }

`;

export const FilterContainer = styled.div `
  width: 100%;
  height: 7rem;
  background-color: #eeefff;
  display: flex;
  align-items: center;
  padding-left: 9rem;
  padding-right: 9rem;
  font-family: Ubuntu, sans-serif;
  justify-content: center;
  border-bottom: 0.1rem solid #c0c0c0;

  @media only screen and (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }

  a {
    padding-top: 0.85rem; 
    padding-bottom: 0.85rem;
    text-decoration: none;
    font-weight: bold;
    color: #e93f3d;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    display: inline-block;
  }

  .selectCity{
    width: 10rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
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

  .selectPrice {
    width: 8rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
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

  .date {
    width: 10rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
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

  #numberPeople{
    width: 9rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
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

  .field {
    height: 5rem;;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    label {
      margin-left: 1.2rem;
      margin-right: 1.2rem;
      font-weight: bold;
      font-size: 1rem;
    }
  }

  #buttonSearch {
    width: 7rem;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    background-color: #e93f3d;
    border-radius: 0.5rem;
    border: none;
    color: #ffffff;
    font-size: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-family: Ubuntu, sans-serif;
  }
`;