import React from 'react';
import MissionSub from './MissionSub';


const missionSubs = [
    {
        image: 'sub1.jpg',
        header: 'Global Charging Network',
        description: 'Our global network of Superchargers and Destination Chargers provide convenient locations to stay charged, anywhere you go.'
    },
    {
        image: 'sub2.png',
        header: 'Energy',
        description: 'Tesla energy products work together to power your home and charge your electric car. Solar produces clean energy during the day and Powerwall stores energy to power your home at night or during an outage.'
    }
];



function Mission() {
    return(
        <div>
            <h1>Tesla's Mission</h1>
            <p>Tesla's mission is to accelerate the world's transition to sustainable energy. We hire the world's best and brightest people to help make this future a reality.</p>
            <img src={require('../assets/images/mission-car.jpg')}></img>
            <h3>Electric Cars</h3>
            <p className='GibMargin'>Every Tesla is designed to be the safest, quickest car in its class—with industry-leading safety, range and performance.</p>
            <div className="subs">
                {missionSubs.map((subs, index) =>
                    <MissionSub image={subs.image}
                        header={subs.header}
                        description={subs.description}
                        key={index} />
                )}
            </div>

            <style jsx>{`
            * {
              text-align: center;
              color: #666;
            }
            h1 {
              font-weight: 100;
              font-size: 40px;
              margin: 50px;
            }
            p {
              font-weight: 100;
              width: 60%;
              margin: auto;
              font-size: 0.9em;
            }
            .GibMargin {
              margin-bottom: 5em;
            }

            img {
              width: 100%;
              margin: 20px;
            }
            h3 {
              margin: 40px;
              color: black;
              font-size: 1.3em;
            }
            .subs {
              display: flex;
              text-align: left;
            }
              `}</style>
        </div>

    );
}

export default Mission;
