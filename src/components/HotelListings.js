import React, { Component } from 'react';
import FilterManager from './FilterManager';
import HotelManager from './HotelManager'

class HotelListings extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mode: null
        }
    }

    modifyMode = (mode) => {
        return this.setState({
            mode: mode
        })
    }

    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="flex-fourth">
                    <FilterManager modifyMode={this.modifyMode} />
                </div>
                <div className="flex-three-fourth">
                    <HotelManager mode={this.state.mode}/>
                </div>
            </div>
        </div>
        )
    }
}

export default HotelListings