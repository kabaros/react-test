import React from 'react';
import PropTypes from 'prop-types';
import './CakeSearch.css';

const CakeSearch = ({ onSearch }) => {
    return(<div className="cake-search">
        <input
         type="text"
         placeholder="Search for a cake"
         onChange={({target}) => onSearch(target.value)} />
    </div>)
};

export default CakeSearch;