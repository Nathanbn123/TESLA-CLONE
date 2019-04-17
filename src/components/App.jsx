import React from 'react';

import Header from './Header';
import TopBanner from './TopBanner';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';











function App() {



  var TopoBano = {
      display: 'absolute',

  }




    return (
        <div>
            <Header style={TopoBano}/>
            <TopBanner />
            <style jsx global>{`
              body {
                margin: 0;
                padding: 0;
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
