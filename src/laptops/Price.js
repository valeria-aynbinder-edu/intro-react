import React from 'react';

export class Price extends React.Component {

    render() {
        return (
            <div>
                <p>Total: {Math.round(this.props.price)}€</p>
                <p>12 x {Math.round(this.props.price / 12)}€</p>
                <p>24 x {Math.round(this.props.price / 24)}€</p>
                <p>12 x {Math.round(this.props.price / 36)}€</p>
            </div>
        )
    }

}