import React, { Component } from 'react';
import "./filter.css";

class Filter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: (props.activeFilter === props.data.ID),
            className: "filter",
            data: props.data
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props !== nextProps) {
            this.setState({
                active: this.shouldThisStateBeActive(nextProps)
            })
        }
        return true
    }

    shouldThisStateBeActive(props) {
        return (props.activeFilter === props.data.ID)
    }

    render() {
        let className = this.state.className
        if(this.state.active === true) {
            className += " active"
        }
        let prefixPadding = " "
        if(this.state.data.PREFIX !== "") {
            prefixPadding += (this.state.data.PREFIX + " ")
        }
        return (
            <div className={className} onClick={() => this.props.onClick(this.state.data.ID) }>
                <div className="filter__detail">
                    <p>sort{prefixPadding}<span className="bold">{this.props.data.NAME}</span></p>
                </div>
            </div>
        )
    }
}

export default Filter