import React from 'react';


function TopBanner(){
    return (
      <div>
        <img src={require("../assets/images/tesla.jpg")}></img>
        <style jsx>{`
            img{
              width: 100%;
              
            }
              `}</style>
      </div>
    );
}

export default TopBanner;
