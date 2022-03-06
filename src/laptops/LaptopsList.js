import React from 'react';
import {Laptop} from './Laptop'

export default class LaptopsList extends React.Component {
    
    render() {
        let laptopsObjects = this.props.laptops.map(
            laptop => {
                return (
                    <li key={laptop.Id}>
                        <Laptop laptop={laptop} />
                    </li>
                )
            }
        )
        return (
            <ul>{laptopsObjects}</ul>
        )
    }
}