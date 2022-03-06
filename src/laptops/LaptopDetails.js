import React from 'react';


export class LaptopDetails extends React.Component {

    render() {
        return (
            <div>
                <p>GPU: {this.props.laptop.Gpu}</p>
                <p>CPU: {this.props.laptop.Cpu}</p>
                <p>Weight: {this.props.laptop.WeightKg + "kg"}</p>
            </div>
        )
    }

}