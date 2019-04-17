import React from 'react';



function Working(){




    return(
        <div className="">
            <hr></hr>
            <h2>Working at Tesla</h2>
            <p>At Tesla, we're solving the world's most important problems with talented individuals who share our passion to change the world. Our culture is fast-paced, energetic and innovative. Headquartered in the San Francisco Bay Area with office locations around the world, we work to build an inclusive environment in which everyone, regardless of gender, race, religion, age, or background, can do their best work.</p>

            <div className='grid'>
                <img className="test" src={require('../assets/images/bikemin.jpg')}></img>
                <img className="test2" src={require('../assets/images/workgrils.jpg')}></img>
                <img className="test3" src={require('../assets/images/tire.jpg')}></img>
                <img className="test4" src={require('../assets/images/workbois.jpg')}></img>
            </div>

            <style jsx>{`


          hr {
            margin: 4em 0;
            border: 1px solid lightgrey;
          }

          h2 {
            font-size: 38px;
            font-weight: lighter;

          }

          div {
            text-align: center;
          }
          p {
            font-size: 14px;
            width: 65%;
            color: #666;
            margin: 4em auto;
            line-height: 20px;
            padding: 2em;
          }
          .grid {
            margin: 0 auto;
            grid-gap: 10px;
            width: 80%;
            display: grid;
            grid-template-row: 1fr 1fr 1fr;
            grid-template-column: 1fr 1fr;

          }
          img {
            width: 100%;
          }

          .test {
            grid-row: 1 / 3;
            grid-column: 1 / 2;
          }
          .test2 {
            grid-row: 1 / 2;
            grid-column: 2 / 3;
          }
          .test3 {
            grid-row: 2 / 3;
            grid-column: 2 / 3;
          }
          .test4 {
            grid-row: 3 / 4;
            grid-column: 1 / 3;
          }








        `}</style>


        </div>

    );
}

export default Working;
