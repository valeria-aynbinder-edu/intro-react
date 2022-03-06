import React from 'react';

export class Title extends React.Component {

    render() {
        return (
            <div>
                <img src='/laptop.jpg' height={'50px'}/>
                <h2>{this.props.name}</h2>
            </div>
        )
    }

}