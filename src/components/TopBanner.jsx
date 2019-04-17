import React from 'react';
import CareerNav from './CareerNav';


function TopBanner(){
    return (
        <div>
            <img src={require('../assets/images/tesla.jpg')}></img>
            <CareerNav/>
            <style jsx>{`
            img{
              width: 100%;
            }
              `}</style>
        </div>
    );
}

export default TopBanner;
