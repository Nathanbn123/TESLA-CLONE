import React from 'react';
import CareerNav from './CareerNav';


function TopBanner(){
    return (
        <div>

            <video id="background-video" loop autoPlay>
                <source src={require('../assets/images/vid.mp4')} type="video/mp4" />

            </video>
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
