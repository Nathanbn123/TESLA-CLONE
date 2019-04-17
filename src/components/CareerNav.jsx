import React from 'react';
import { Link } from 'react-router-dom';




function CareerNav(){






    return (
        <div className='TrveContainer'>
            <div className="container">
                <h4>TESTING</h4>
                <div>
                    <a>ABOUT</a>
                    <a>CAREER</a>
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
                }

                a {
                  font-size: 12px;
                  padding: 1em;

                }


                .container {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-between;
                  color: white;
                  width: 100%;
                  font-weight: lighter;
                }

                .TrveContainer {
                  position: absolute;
                  top: 80px;
                  width: 90%;

                  left: 5%;

                }


            `}</style>

        </div>




    );
}

export default CareerNav;
