import React from 'react';
import PropTypes from 'prop-types';



function MissionSub(props){
    return(
        <div>
            <img src={require(`../assets/images/${props.image}`)}></img>
            <h4>{props.header}</h4>
            <p>{props.description}</p>

            <style jsx> {`
        img {
          width: 100%;

        }

        div {
          width: 48%;
          margin: 0 auto;

        }




      `}</style>




        </div>

    );
}

MissionSub.propTypes = {
    image: PropTypes.string,
    header: PropTypes.string,
    description: PropTypes.string
};

export default MissionSub;
