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
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <button>{this.props.button}</button>
                            </td>
                            <td>
                                <button onClick={this.props.click}>Show {this.props.item}</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Card;
