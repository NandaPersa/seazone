import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from './styles';


export function Card () {
    return (
        <Container>
            <Link href="/properties">
                <Image 
                    width={1120}
                    height={420} 
                    src="https://blog.friasneto.com.br/wp-content/uploads/2020/07/piracicaba-casa-condominio-residencial-terras-de-artemis-artemis-23-11-2019_11-02-08-0.jpg"
                    alt={"imagem"}
                    objectFit="cover"
                />
            
            </Link>
            <div className="actions">
                <div className="action-button airbnb">
                    <img src="/assets/airbnb.png" alt="Airbnb" />
                </div>
                <div className="action-button seazone">
                    <img src="/assets/seazone.png" alt="Seazone" />
                </div>
            </div>
            <h2>JBM202 - Suite top vista mar resort Jurere</h2>
            <p id="resume">Jurere internacional . 8 hóspedes . 2 quartos</p>
            <div className="info">
                <p>Valor diária</p>
                <span>R$700 / noite</span>
            </div>
            <div className="info">
                <p>Valor diária</p>
                <span>R$700 / noite</span>
            </div>
            <div className="info">
                <p>Valor diária</p>
                <span>R$700 / noite</span>
            </div>
            <div className="info">
                <p>Valor diária</p>
                <span>R$700 / noite</span>
            </div>
            <div className="info">
                <p>Valor diária</p>
                <span>R$700 / noite</span>
            </div>
            <div className="infoEnd">
                <p id="total">Total</p>
                <div className="value">
                    <span>R$3700,00 | </span>
                    <div className="important-value">
                        <span> R$3330</span>
                        <span>à vista</span>
                    </div>
                </div>
            </div>
           
        </Container>
    );
}