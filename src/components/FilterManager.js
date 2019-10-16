import React, { Component } from 'react';
import Filter from './Filter';
import "./filtermanager.css";

const FILTER_TYPES = [{ 
        ID: 0,
        NAME: "alphabetically",
        PREFIX: ""
    },
    {
        ID: 1,
        NAME: "price",
        PREFIX: "by"
    },
    {
        ID: 2,
        NAME: "star rating",
        PREFIX: "by"
    }]

class FilterManager extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeFilter: FILTER_TYPES[0].ID,
            filters: FILTER_TYPES
        }

        this.clickFilter = this.clickFilter.bind(this)
    }

    clickFilter = (value) => {
        return this.setState({
            activeFilter: value
        }, () => this.props.modifyMode(value) )
    }

    generateFilters() {
        let filters = []
        this.state.filters.map( (item, index) => {
            return filters.push(<Filter key={index} data={item} activeFilter={this.state.activeFilter} onClick={this.clickFilter} />)
        })
        return filters
    }


    render() {
        return (
            <div className="filters__content">
                { this.generateFilters() }
            </div>
        )
    }
}

export default FilterManager