import React from 'react';
import { Card } from '../components/Card';
import { Container, SubMenu } from '../styles/pages/index';


export default function Home() {
  return (
    <>
      <SubMenu> 
        <div>
          <h2>Todos os imóveis</h2>
          <span>200 imóveis</span>
        </div>
          <select name="order" className="order">
            <option value="Ordenar" selected>Ordenar</option>
          </select>
      </SubMenu>
      <Container >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </Container>
    </>

  );
}
