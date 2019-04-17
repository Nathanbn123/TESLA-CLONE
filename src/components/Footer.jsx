import React from 'react';

function Footer(){
    return(
        <div>
            <p>Tesla is committed to working with and providing reasonable accommodations to individuals with disabilities. If you need a reasonable accommodation because of a disability for any part of the employment process, please call <a>510-602-3960</a> or send an e-mail to <a>accommodationrequest@tesla.com</a> and let us know the nature of your request and your contact information.</p>
            <p>For quick access to screen reading technology compatible with this site <a>click here to download a free compatible screen reader</a> (free step by step <a>tutorial can be found here</a>). Please contact <a>accommodationrequest@tesla.com</a> for additional information or to request accommodations.</p>
            <div className="links">
                <a>Tesla © 2019 <span> |</span></a>
                <a>Privacy and Legal<span> |</span></a>
                <a>Contact<span> |</span></a>
                <a>Careers<span> |</span></a>
                <a>Get Newsletter<span> |</span></a>
                <a>Forums<span> |</span></a>
                <a>Locations</a>
            </div>
            <style jsx>{`
        div {
          margin: 2em 1em;
          color: #666;
          width: 80%;
          margin: 0 10%;
        }
        p {
          font-size: 11.5px;
          font-weight: lighter;
          line-height: 20px;
        }
        p a {
          color: blue;
        }
        p a:hover {
          cursor: pointer;
          color: red;
        }
        .links {
          font-weight: lighter;
          font-size: 14px;
          margin: 9em 0 1em 0;
        }
        .links a {
          margin: 0 2px;
        }
        span {
          color: #ddd;
        }

        `}</style>
        </div>

    );
}

export default Footer;
