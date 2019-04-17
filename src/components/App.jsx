import React from 'react';

import Header from './Header';
import TopBanner from './TopBanner';
import Button from './Button';
import Mission from './Mission';
import Working from './Working';
import Student from './Student';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';











function App() {







    return (
        <div>
            <Header/>
            <TopBanner />
            <Button />
            <Mission />
            <Working/>
            <Student/>
            <Footer/>
            <style jsx global>{`
              body {
                
                margin: 0;
                padding: 0;
                font-family: "Helvetica", "Arial", "sans-serif";
              }

              // Header {
              //   position: static;
              // }

          `}</style>
            <style jsx>{`
        `}</style>
        </div>
    );
}


export default App;
