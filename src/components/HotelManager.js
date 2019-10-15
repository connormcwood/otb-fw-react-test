import React, { Component } from 'react';
import Hotel from './Hotel';
import "./hotelmanager.css";

class HotelManager extends Component {

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

export default HotelManager