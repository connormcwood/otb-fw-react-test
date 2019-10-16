import React, { Component } from 'react';
import Hotel from './Hotel';
import "./hotelmanager.css";

const HOTEL_LISTINGS = [{
    id: 1,
    name: "Iberostar Grand Salome",
    location: "Costa Adeje, Tenerife",
    rating: 5,
    pax: {
        adult: 2,
        children: 2,
        infant: 1
    },
    duration: 7,
    startDate: "3rd July 2019",
    departing: "East Midlands",
    price: 1136.50,
    image: "hotel-image-1.png",
    displayInfo: true,
    description: "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea."
},{
    id: 2,
    name: "Aguamarina Golf Hotel",
    location: "Costa Adeje, Tenerife",
    rating: 4,
    pax: {
        adult: 2,
        children: 1,
        infant: 0
    },
    duration: 7,
    startDate: "27th May 2019",
    departing: "Liverpool",
    price: 696.80,
    image: "hotel-image-2.png",
    displayInfo: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur eleifend dui, eu lacinia enim euismod eget. Nunc egestas velit massa, vel luctus risus rutrum ac. Nulla auctor, elit a tincidunt suscipit, leo enim convallis sapien, non eleifend metus ipsum at libero. Ut tempus nibh ante, vel euismod eros sollicitudin vel. Phasellus ut enim efficitur, viverra diam quis, accumsan ex."
},{
    id: 3,
    name: "Las Piramides Resort",
    location: "Costa Adeje, Tenerife",
    rating: 3,
    pax: {
        adult: 2,
        children: 2,
        infant: 0
    },
    duration: 7,
    startDate: "3rd July 2019",
    departing: "Manchester",
    price: 499.99,
    image: "hotel-image-3.png",
    displayInfo: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur eleifend dui, eu lacinia enim euismod eget. Nunc egestas velit massa, vel luctus risus rutrum ac. Nulla auctor, elit a tincidunt suscipit, leo enim convallis sapien, non eleifend metus ipsum at libero. Ut tempus nibh ante, vel euismod eros sollicitudin vel. Phasellus ut enim efficitur, viverra diam quis, accumsan ex."
}]

class HotelManager extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hotelListings: HOTEL_LISTINGS,
            mode: null,
            modeChanged: false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props !== nextProps) {
            let modeChanged = this.state.modeChanged
            if(this.state.mode !== nextProps.mode) {
                modeChanged = false
            } else if(this.state.mode === nextProps.mode) {
                modeChanged = (!modeChanged)
            }
            let hotelListings = this.sortListings(nextProps.mode)
            this.setState({
                mode: nextProps.mode,
                modeChanged: modeChanged,
                hotelListings: hotelListings
            }, this.generateListings)
        }
        return true
    }

    sortByPrice(array) {
        if(this.state.modeChanged) {
            return array.sort( (a,b) => (a.price > b.price) ? 1 : -1)
        }
        return array.sort( (a,b) => (a.price < b.price) ? 1 : -1)
    }

    sortAlphabetically(array) {
        if(this.state.modeChanged) {
            return array.sort( (a,b) => (a.name > b.name) ? 1 : -1) 
        }
        return array.sort( (a,b) => (a.name < b.name) ? 1 : -1)        
    }

    sortByRating(array) {
        if(this.state.modeChanged) {
            return array.sort( (a,b) => (a.rating > b.rating) ? 1 : -1)
        }
        return array.sort( (a,b) => (a.rating < b.rating) ? 1 : -1)
    }

    sortListings(mode) {
        let hotelListings = this.state.hotelListings
        switch(mode) {
            case 0: 
                hotelListings = this.sortAlphabetically(hotelListings)
            break
            case 1:
                hotelListings = this.sortByPrice(hotelListings)
            break
            case 2:
                hotelListings = this.sortByRating(hotelListings)
            break
            default:
            break
        }
        return hotelListings
    }

    generateListings() {
        let rows = []
        let hotelListings = this.state.hotelListings
        hotelListings.map( (item, index) => {
            return rows.push(<Hotel key={index} id={index} name={item.name} rating={item.rating} pax={item.pax} image={item.image} departing={item.departing} startDate={item.startDate} duration={item.duration} location={item.location} price={item.price} displayInfo={item.displayInfo} description={item.description} onReadmoreClick={this.onReadmoreClick} />)
        })
        return rows
    }

    onReadmoreClick = (id) => {
        let hotelListings = this.state.hotelListings
        for(let i = 0; i < hotelListings.length; i++) {
            if(i === id) {
                hotelListings[i].displayInfo = (!hotelListings[i].displayInfo)
            } else {
                hotelListings[i].displayInfo = false
            }
        }
        return this.setState({
            hotelListings: hotelListings
        })
    }

    render() {
        return (
            <div className="hotels__content">
                { this.generateListings() }
            </div>
        )
    }
}

export default HotelManager