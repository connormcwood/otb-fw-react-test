import React, { Component } from 'react';
import Hotel from './Hotel';
import "./hotelmanager.css";

const HOTEL_LISTINGS = [{
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
    description: "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea."
},{
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur eleifend dui, eu lacinia enim euismod eget. Nunc egestas velit massa, vel luctus risus rutrum ac. Nulla auctor, elit a tincidunt suscipit, leo enim convallis sapien, non eleifend metus ipsum at libero. Ut tempus nibh ante, vel euismod eros sollicitudin vel. Phasellus ut enim efficitur, viverra diam quis, accumsan ex."
},{
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur eleifend dui, eu lacinia enim euismod eget. Nunc egestas velit massa, vel luctus risus rutrum ac. Nulla auctor, elit a tincidunt suscipit, leo enim convallis sapien, non eleifend metus ipsum at libero. Ut tempus nibh ante, vel euismod eros sollicitudin vel. Phasellus ut enim efficitur, viverra diam quis, accumsan ex."
}]

class HotelManager extends Component {

    constructor(props) {
        super(props)
    }

    generateListings() {
        let rows = []
        HOTEL_LISTINGS.map( (item, index) => {
            rows.push(<Hotel key={index} name={item.name} rating={item.rating} pax={item.pax} image={item.image} departing={item.departing} startDate={item.startDate} duration={item.duration} location={item.location} price={item.price} description={item.description} />)
        })
        return rows
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