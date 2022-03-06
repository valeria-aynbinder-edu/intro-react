import React from 'react';

export class Title extends React.Component {

    render() {
        return (
            <div>
                <img src='https://www.ivory.co.il/files/catalog/org/1618928694A94Rr.jpg'/>
                <h2>{this.props.name}</h2>
            </div>
        )
    }

}