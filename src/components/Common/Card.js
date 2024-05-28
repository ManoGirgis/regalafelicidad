import React, { Component } from 'react';

export class Card extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='card-container' key={this.props.id}>
                <img src={this.props.image} alt={this.props.title} />
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
                <div className='button-aligner'>
                    <button>{this.props.button}</button>
                    <button onClick={() => this.props.click(this.props.id)}>Show {this.props.item}</button>
                </div>
            </div>
        )
    }
}

export default Card;
