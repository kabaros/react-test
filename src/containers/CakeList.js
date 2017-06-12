import React, { Component } from 'react';
import CakeCard from '../components/CakeCard';

import { cakeUrl } from '../config';
import './CakeList.css';

class CakeList extends Component {
    state = {
        cakes: []
    }
    async componentDidMount() {
        const response = await fetch(cakeUrl);
        const cakes = await response.json();
        
        this.setState({
            cakes
        });
    }
    render() {
        return (<div className="cakes-container">
            {
                this.state.cakes.map((cake) => <CakeCard cake={cake} />)
            }
        </div>);
    }
}

export default CakeList;