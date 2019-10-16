import React, { Component } from 'react';
import "./hotel.css";

class Hotel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: props.id,
            name: props.name,
            backgroundImage: props.image,
            duration: props.duration,
            startDate: props.startDate,
            departing: props.departing,
            rating: props.rating,
            location: props.location,
            pax: props.pax,
            price: props.price,
            description: props.description,
            displayInfo: props.displayInfo
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props !== nextProps) {
            this.setState(nextProps)
        }
        return true
    }

    generateRating() {
        let stars = []
        for(let i=0; i < this.state.rating; i++) {
            stars.push(<div key={i} className="star-five"></div>)
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

    // Convert last comma if there are more than two types of passengers
    convertLastComma(string) {
        let commas = string.split(',')
        if(commas.length > 2) {
            let tempString = ""
            for(let i = 0; i < commas.length; i++) {
                tempString += commas[i]
                if(i === (commas.length - 2)) {
                    tempString += " &"
                } else if(i !== (commas.length - 1)) {
                    tempString += ","
                }
            }
            string = tempString            
        }
        return string
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
            __html: this.convertLastComma(string.substring(0, string.length - 2))
        }
    }

    displayReadMoreText() {
        if(this.state.displayInfo) {
            return "Read less"
        }
        return "Read more"
    }

    render() {
        let informationClassname = "hotel__information"
        if(this.state.displayInfo) {
            informationClassname += " active"
        }
        const imagePath = require(`../../public/${this.state.backgroundImage}`)
        return (
            <div className="hotel">
                <div className="row">
                    <div className="hotel__image" style={{
                        backgroundImage: `url(${imagePath})`
                    }}>
                        <div className="readmore" onClick={() => this.props.onReadmoreClick(this.state.id)}>
                            <div className="content__padding">
                                <p><span className="bold">{this.displayReadMoreText() }</span> about this hotel</p>
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
                                    <div className="prebook__button__container">
                                        <p className="prebook__text">Book Now</p>
                                    </div>
                                    <div className="book__button__container">
                                        <p className="book__text">£{this.state.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={informationClassname}>
                        <div className="content__padding">
                            <div className="description__container">
                                <h5>Overview</h5>
                                <p>{this.state.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hotel