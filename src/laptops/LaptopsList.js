import React from 'react';
import {Laptop} from './Laptop'

export default class LaptopsList extends React.Component {

    renderLaptop(laptop, index, laptops) {
        return (
            // <li key={laptop.Id}>
                <Laptop key={laptop.Id} laptop={laptop} />
            // </li>
        )
    }
    
    render() {
        let laptopsObjects = this.props.laptops.map(
            // laptop => {
            //     return (
            //         // <li key={laptop.Id}>
            //             <Laptop key={laptop.Id} laptop={laptop} />
            //         // </li>
            //     )
            // }
            this.renderLaptop
        )
        return (
            <ul>{laptopsObjects}</ul>
        )
    }
}