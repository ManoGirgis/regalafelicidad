import React, { Children, Component } from 'react'

export class Card extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div key={this.props.TheKey}>
                {/* <img src={this.props.imag}></img> */}
                <h1>{this.props.title}</h1>
                <p>{Children}</p>
                <button>{this.props.button}</button>
            </div>
        )
    }
}

export default Card
