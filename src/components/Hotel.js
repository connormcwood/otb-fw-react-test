import React, { Component } from 'react';
import "./hotel.css";

class Hotel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: props.name,
            backgroundImage: props.image,
            duration: props.duration,
            startDate: props.startDate,
            departing: props.departing,
            rating: props.rating,
            location: props.location,
            pax: props.pax
        }
    }

    generateRating() {
        let stars = []
        for(let i=0; i < this.state.rating; i++) {
            stars.push(<div className="star-five"></div>)
        }
        return stars
    }    

    pluriseText(text, value, plursiation = null) {
        if(value > 1) {
            if(plursiation === null) {
                text += "s"
            } else {
                text = plursiation
            }
        }
        text = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
        return `<span class="bold">${value}</span> ${text}, `
    }

    convertPaxText(pax) {
        let string = ""
        if(pax.adult > 0) {
            string += this.pluriseText("adult", pax.adult)
        }
        if(pax.children > 0) {
            string += this.pluriseText("child", pax.children, "children")
        }
        if(pax.infant > 0) {
            string += this.pluriseText("infant", pax.infant)            
        }
        return {
            __html: string.substring(0, string.length - 2)
        }
    }

    render() {
        return (
            <div className="hotel">
                <div className="row">
                    <div className="hotel__image" style={{
                        backgroundImage: `url(/${this.state.backgroundImage})`
                    }}>
                    <div className="readmore">
                        <div className="content__padding">
                            <p><span className="bold">Read more</span> about this hotel</p>
                        </div>
                    </div>
                    </div>
                    <div className="hotel__detail">
                        <div className="content__padding">
                            <div className="content__container">
                                <h4 className="name">{this.state.name}</h4>
                                <p className="location">{this.state.location}</p>
                                <div className="rating__container">
                                    { this.generateRating() }
                                </div>
                                <p className="passengers" dangerouslySetInnerHTML={this.convertPaxText(this.state.pax)}></p>
                                <p className="duration"><span className="bold">{this.state.startDate}</span> for <span className="bold">{this.state.duration} days</span></p>
                                <p className="departing">departing from <span className="bold">{this.state.departing}</span></p>
                            </div>
                            <div className="button__container">
                                <a href="#" className="book__button">
                                    <p className="prebook__text">Book Now</p>
                                    <p className="book__button__container">£5000</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hotel