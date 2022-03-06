import React from 'react';
import { Price } from './Price';
import { Title } from './Title';

export class Laptop extends React.Component {

    render() {
        return (
            <div>
                <Title name={this.props.laptop.name}/>
                <Price price={this.props.laptop.price}/>
                
            </div>
        )
    }

}