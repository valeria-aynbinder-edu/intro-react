import React from 'react';

export class Price extends React.Component {

    render() {
        return (
            <div>
                <p>Total: {this.props.price} euro</p>
                <p>12 x {this.props.price / 12} euro</p>
                <p>24 x {this.props.price / 24} euro</p>
                <p>12 x {this.props.price / 36} euro</p>
            </div>
        )
    }

}