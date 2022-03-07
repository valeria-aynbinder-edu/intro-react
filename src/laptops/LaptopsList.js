import React from 'react';
import {Laptop} from './Laptop'
// import {reviews} from "./data.js";


export default class LaptopsList extends React.Component {

    constructor(props) {
        super(props)

        this.renderLaptop = this.renderLaptop.bind(this)
    }



    renderLaptop(laptop, index, laptops) {
        // console.log(reviews)
        let reviewsList = this.props.reviews.filter((elem) => elem.laptopId === laptop.Id);
        return (
            // <li key={laptop.Id}>
                <Laptop key={laptop.Id} laptop={laptop} reviews={reviewsList} />
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

