import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Breadcrumb from '../components/Breadcrumb';

import { PropertyDetails, Featured } from '../styles/pages/properties';
 
export default function Properties() {
    const ways = [
        {
            title: 'Imóveis',
            path: '/',
        },
        {
            title: 'Jurerê Internacional',
            path: '/properties',
        }
    ];

  return (
      <>
        <Breadcrumb ways={ways} />
        <PropertyDetails>
            <div className="locale">
                <Image 
                    width={400}
                    height={330} 
                    src="https://blog.friasneto.com.br/wp-content/uploads/2020/07/piracicaba-casa-condominio-residencial-terras-de-artemis-artemis-23-11-2019_11-02-08-0.jpg"
                    alt={"imagem"}
                    objectFit="cover"
                />
                <h2>Localização</h2>
                <p>Av. Búzios 1800, Jurereê Internacional, Florianópolis - SC. CEP: 89650-100</p>
                <Link href="/">Ver Localização</Link>
            </div>
            <div className="description">
                <h1>ILC2307 - Suite Top vista mar resort Jurere</h1>
                <p>Jurere Internacional, Florianópolis</p>
                <div className="status">
                    <p>2 Quartos . 3 Camas . 2 banheiros</p>
                    <div className="ball">
                        <div className="green-ball"></div> 
                        <p>ativo</p>
                    </div>
                </div>
                
                <div className="cards">
                    <div className="card-item">
                        <h2>Máx. de hóspedes</h2>
                        <div className="card-item-value">   
                            <img src="/assets/people.png" alt="Máx. de hóspedes" />
                            <h3>6</h3>
                        </div>
                    </div>
                    <div className="card-item">
                        <h2>Taxa de Limpeza</h2>
                        <div className="card-item-value">      
                            <img src="/assets/trash.png" alt="Taxa de Limpeza" />
                            <h3>R$50,00</h3>
                        </div>
                    </div>
                    <div className="card-item">
                        <h2>Caução</h2>
                        <div className="card-item-value">   
                            <img src="/assets/pay.png" alt="Caução" />
                            <h3>R$700,00</h3>
                        </div>
                    </div>
                </div>
                <div className="features">
                    <Featured>
                        <h2 className="headline">Camas</h2>
                        <div className="dots">
                            <div className="dot-group">
                                <div className="dot"></div>
                                <p><strong>1 cama de casal: </strong>duplo</p>
                            </div>
                            <div className="dot-group">
                                <div className="dot"></div>
                                <p><strong>1 sofá cama: sala/área comum</strong></p>
                            </div>
                        </div>
                    </Featured>
                    <Featured>
                        <h2 className="headline">Regras</h2>
                        <div className="roles">
                            <div className="line">
                                <p>Aceita crianças (de 02 até 12 anos)<span className="yes">sim</span></p>
                                <p>Permitido Fumar no Quarto<span className="not">não</span></p>
                            </div>
                            <div className="line">
                                <p>Aceita Bebês (abaixo de 02 anos)<span className="yes">sim</span></p>
                                <p>Aceita Animais de Estimação<span className="not">não</span></p>
                            </div>
                            <div className="line">
                                <p>Fornece Berços<span className="not">não</span></p>
                                <p>Eventos são Permitidos<span className="not">não</span></p>
                            </div>
                            <div className="line">
                                <p>Restrição de Idade Mínima para Fazer Reserva<span className="not">não</span></p>
                            </div>
                            <a href="#">Mais regras</a>
                        </div>
                    </Featured>
                    <Featured>
                        <h2 className="headline">Comodidades</h2>
                        <div className="dots comodities">
                            <div className="dot-group">
                                <div className="dot"></div>
                                <p>Estacionamento<span className="not">não</span></p>
                            </div>
                            <div className="dot-group">
                                <div className="dot"></div>
                                <p>Piscina Privada<span className="yes">sim</span></p>
                            </div>
                        </div>
                    </Featured>
                </div>
            </div>
        </PropertyDetails>
    </>
  );
}
