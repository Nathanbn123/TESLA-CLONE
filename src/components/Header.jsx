import React from 'react';
import { Link } from 'react-router-dom';

function Header(){


    return(
        <div className="main">
            <div className="logo">
                <a><img src={require('../assets/images/LOGO.jpg')}></img></a>
            </div>
            <div className="links">
                <a>MODEL S</a>
                <a>MODEL 3</a>
                <a>MODEL X</a>
                <a>MODEL Y</a>
                <a>ROADSTER</a>
                <a>ENERGY</a>
            </div>
            <div className="shop">
                <a>SHOP</a>
                <a>SIGN UP</a>
                <a>|||</a>
            </div>
            <style jsx>{`
            .main {
              overflow: hidden;
              position: absolute;
              width: 100%;
              height: 52px;
              background-color: rgba(0, 0, 0, 0.6);
              display: flex;
              flex-dirrection: row;
              justify-content: space-between;
              align-items: center;
            }
            img {
              height: 30px;
              margin-left: 10px;

            }
            .links {
              cursor: pointer;
              display: flex;
              flex-dirrection: row;
              justify-content: space-between;
              align-items: center;
            }
            a {
              cursor: pointer;
              font-size: 0.8em;
              padding: 10px;
              color: white;
              font-family: "Helvetica", "Arial", "sans-serif";
            }



        `}</style>

        </div>





    );
}

export default Header;
