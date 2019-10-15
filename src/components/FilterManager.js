import React, { Component } from 'react';
import Filter from './Filter';
import "./filtermanager.css";

const FILTER_TYPES = {
    ALPHABETICALLY: { 
        ID: 0,
        NAME: "alphabetically",
        PREFIX: ""
    },
    PRICING: {
        ID: 1,
        NAME: "price",
        PREFIX: "by"
    },
    RATING: {
        ID: 2,
        NAME: "star rating",
        PREFIX: "by"
    }
}

class FilterManager extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeFilter: FILTER_TYPES.ALPHABETICALLY.ID
        }

        this.clickFilter = this.clickFilter.bind(this)
    }

    clickFilter = (value) => {
        console.log(value)
    }

    render() {
        return (
            <div className="filters__content">
                <Filter data={FILTER_TYPES.ALPHABETICALLY} activeFilter={this.state.activeFilter} onClick={this.clickFilter} />
                <Filter data={FILTER_TYPES.PRICING} activeFilter={this.state.activeFilter} onClick={this.clickFilter} />
                <Filter data={FILTER_TYPES.RATING} activeFilter={this.state.activeFilter} onClick={this.clickFilter} />
            </div>
        )
    }
}

export default FilterManager