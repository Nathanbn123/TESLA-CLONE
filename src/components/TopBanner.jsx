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
            video{
              width: 100vw;
            }
              `}</style>
        </div>
    );
}

export default TopBanner;
