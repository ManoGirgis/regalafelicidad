import React, { Children, Component } from 'react'

export class Card extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='card-container' key={this.props.id}>
                {/* <img src={this.props.imag}></img> */}
                <img src={this.props.image}></img>
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
                <button>{this.props.button}</button>
            </div>
        )
    }
}

export default Card
