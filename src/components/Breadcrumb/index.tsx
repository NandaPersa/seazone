import React from 'react';
import Link from 'next/link';

import { Container } from './styles';

export default function Breadcrumb ({ways}) {
    return (
        <Container>
            {
                ways.map((way, i) => {
                    return (<div key={i}><Link href={way.path}>{way.title}</Link>{ ways.length === i + 1 ? '' : <img src='/assets/right-arrow.svg' alt="Arrow next" width="12px" height="12px" ></img> }</div>);
                })
            }
        </Container>
    );
}