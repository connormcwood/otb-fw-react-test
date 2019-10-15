import React, { Component } from 'react';
import Hotel from './Hotel';
import "./hotelslisting.css";

class HotelsListing extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="hotels__content">
                <Hotel />
                <Hotel />
                <Hotel />
            </div>
        )
    }
}

export default HotelsListing