import React from 'react';


function Student() {




    return(
        <div>
            <h2>University Students</h2>
            <p>If you're a student with an interest in accelerating the world’s transition to sustainable energy, then apply for one of our intern/co-op positions.</p>
            <a href="#">Browse Openings</a>









            <style jsx>{`
        div {
          height: 232px;
          background-color: #eee;
          text-align: center;
          margin-top: 6em;
          padding-top: 2em;
          font-weight: lighter;
        }

        h2 {
          font-weight: lighter;
        }

        p {
          font-size: 16px;
          width: 35%;
          color: #666;
          margin: 0 auto;
          line-height: 20px;
          padding-bottom: 2em;
        }

        a {
          text-decoration: none;

        }

        a:hover {
          color: red;
        }




        `}</style>

        </div>
    );
}

export default Student;
