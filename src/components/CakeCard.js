import React from 'react';
import PropTypes from 'prop-types';
import './CakeCard.css';

const CakeCard = ({ cake }) => {
    return (<article className="cake-card">
        <div className="card-header">
            <img alt={cake.title} src={cake.image} />
        </div>
        <h2>{cake.title}</h2>
        <p>{cake.desc}</p>
    </article>);
};

CakeCard.propTypes = {
    cake: PropTypes.shape({
        title: PropTypes.string,
        desc: PropTypes.string,
        image: PropTypes.string
    })
};

export default CakeCard;