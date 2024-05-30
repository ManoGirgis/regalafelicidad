import React, { Component } from 'react';
import { FaEye } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

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
                <div className='button-aligner' id='card-button'>
                    <button>
                        {this.props.children}
                    </button>
                    <button onClick={() => this.props.click(this.props.id)}><FaEye /></button>
                </div>
            </div>
        )
    }
}

export default Card;
