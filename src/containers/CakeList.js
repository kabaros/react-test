import React, { Component } from 'react';
import CakeCard from '../components/CakeCard';
import CakeSearch from '../components/CakeSearch';
import { fetchCakes } from '../helpers/api-helpers';
import matchCakes from '../helpers/match-cakes';

import './CakeList.css';

class CakeList extends Component {
    state = {
        cakes: [],
        searchCriteria: '',
    }

    allCakes = []

    async componentDidMount() {
        const cakes = await fetchCakes();
        this.allCakes = cakes;
        
        this.setState({
            cakes
        });
    }

    searchCakes = (cakeName) => {
        if(!cakeName) {
            this.setState({
                cakes: this.allCakes
            })
        }

        const cakes = matchCakes(this.allCakes, matchCakes)

        this.setState({
            cakes
        })
    }

    render() {
        return (
        <div>
            <CakeSearch searchCriteria={this.state.searchCriteria} onSearch={this.searchCakes} />
            <div className="cakes-container">
                {
                    this.state.cakes.map((cake) => <CakeCard cake={cake} />)
                }
            </div>
        </div>);
    }
}

export default CakeList;