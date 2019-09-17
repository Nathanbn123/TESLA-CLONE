import React from 'react';
import { Link } from 'react-router-dom';




function CareerNav(){

  const selectedLink = {
    opacity: '.5',
  }

    return (
        <div className='TrveContainer'>
            <div className="container">
                <h4>CAREERS</h4>
                <div className="linkContainer">
                    <a>ABOUT</a>
                    <a style={selectedLink}>CAREER</a>
                    <a>CONTACT</a>
                    <a>LEGAL</a>
                    <a>INVESTORS</a>
                    <a>SUPPLIERS</a>
                </div>
            </div>
            <hr></hr>
            <style jsx>{`

                h4 {
                  width: 20%;
                  padding-right: 9em;
                  font-weight: lighter;
                  font-size: 20px;
                }
                linkContainer {
                  transition: color 100ms linear;
                }
                a {
                  font-size: 13px;
                  padding: 1em;
                  cursor: pointer;
                  transition: color 100ms linear;
                }

                a:hover {
                  opacity: .5;
                  transition: color 100ms linear;

                }


                .container {
                  overflow: hidden;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-between;
                  color: white;
                  width: 100%;
                  font-weight: lighter;
                }

                .TrveContainer {
                  overflow: hidden;
                  position: absolute;
                  top: 80px;
                  width: 70vw;
                  left: 15%;

                }


            `}</style>

        </div>




    );
}

export default CareerNav;
