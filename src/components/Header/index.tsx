import React,  { useState } from 'react';
import Link from 'next/link';

import { Container, FilterContainer } from './styles';

export function Header () {
    const [menu, setMenu] = useState(false);

    function changeMenu(){
        if(!menu){
            setMenu(true);
        }else{
            setMenu(false);
        } 
    }
    return (
        <>
        <Container>
            <Link href="/">
                <img src="/assets/logo.png" alt="Seazone"/>
            </Link>
            <ul className="menu-desktop">
                <li><Link href="/calendary">Calendário</Link></li>
                <li><Link href="/clients">Clientes</Link></li>
                <li><Link href="/orcs">Orçamentos</Link></li>
                <li className="active"><Link href="/properties">Propriedades</Link></li>
                <li><Link href="/control">Controle</Link></li>
            </ul>
            { menu && (
                <ul>
                    <li><Link href="/calendary">Calendário</Link></li>
                    <li><Link href="/clients">Clientes</Link></li>
                    <li><Link href="/orcs">Orçamentos</Link></li>
                    <li className="active"><Link href="/properties">Propriedades</Link></li>
                    <li><Link href="/control">Controle</Link></li>
                </ul>
            )}
            <img src="/assets/menu.svg" alt="Menu" className="menu" onClick={changeMenu} />
        </Container>

        <FilterContainer>
            <div className="field">
                <label>Localização</label>
                <select name="city" className="selectCity">
                    <option value="Florianópolis" selected>Florianópolis</option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Gramado">Gramado</option>
                </select>
            </div>
            <div className="field">
                <label>Preço</label>
                <select name="price" className="selectPrice">
                    <option value="300-10000" selected>300-10000</option>
                    <option value="10000-20000">10000-20000</option>
                    <option value="20000-30000">20000-30000</option>
                </select>
            </div>
            <div className="field">
                <label>Check-in</label>
                <input  type="date" className="date"/>
            </div>
            <div className="field">
                <label>Check-out</label>
                <input type="date" className="date"/>
            </div>
            <div className="field">
                <label>Nº de hóspedes</label>
                <input id="numberPeople" type="number" min="1"/>
            </div>
            <div className="field">
                <input id="buttonSearch" type="button" value="Buscar" />
            </div>
            <div className="field">
                <a href="#">+ Filtros</a>
            </div>
        
        </FilterContainer>
        </>

    );
}