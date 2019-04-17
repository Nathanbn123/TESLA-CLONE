import React from 'react';

function Button(){


  return (
    <div>
      <button>SEARCH ALL JOBS</button>
      <style jsx>{`
          div {
            text-align: center;
          }
          button {
            width: 220px;
            height: 44px;
            background-color: rgba(0,0,0,0.9);
            color: white;
            border-radius: 50px;
            font-size: 0.8em;
            margin-top: 50px;
          }
          button:hover {
            transition: background-color 0.2s;
            background-color: rgba(0,0,0,1);
            cursor: pointer;
          }
            `}</style>
    </div>

  )
}

export default Button;
