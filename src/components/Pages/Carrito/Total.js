import React, { Component } from 'react'

export class Total extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className='Total-container'>
                <table>
                    <tr>
                        <th>Total: </th>
                        <th>{this.props.subtotal}</th>
                    </tr>
                    <tr>
                        <th>Tax: </th>
                        <th>0.00</th>
                    </tr>
                    <tr>
                        <th><hr></hr></th>
                        <th><hr></hr></th>
                    </tr>

                    <tr>
                        <th>SubTotal: </th>
                        <th>{this.props.subtotal}</th>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Total
