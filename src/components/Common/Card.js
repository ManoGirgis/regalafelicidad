import React, { Component } from 'react';

// import { FaEye } from "react-icons/fa";
// import { FaCartPlus } from "react-icons/fa";

// export class Card extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div className='card-container' key={this.props.id}>
//                 <img src={this.props.image} alt={this.props.title} />
//                 <h1>{this.props.title}</h1>
//                 <p>{this.props.text}</p>
//                 <div className='button-aligner' id='card-button'>
//                     <button>
//                         {this.props.children}
//                     </button>
//                     <button onClick={() => this.props.click(this.props.id)}><FaEye /></button>
//                 </div>
//             </div>
//         )
//     }
// }


export default function Card(props) {
    return (
        <a key={props.id} onClick={() => props.click(props.id)} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                    src={props.image}
                    alt={props.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{props.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{props.text} {props.unit}</p>
        </a>
    )
}
