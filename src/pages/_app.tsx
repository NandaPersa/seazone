import React from 'react';
import { Header } from '../components/Header';

import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <div>
        <main>
          <Header/>
          <Component {...pageProps} />
        </main>
      </div>
     </>
  );
}

export default MyApp
