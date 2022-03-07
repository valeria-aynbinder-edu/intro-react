import React from 'react';
import Review from "./Reviews";

export default class ReviewsList extends React.Component {

    renderReview(review, index, reviews) {

        return (
            // <li key={review.Id}>
            <Review key={Math.random()} review={review} />
            // </li>
        )
    }
    render() {
        let reviewObjects = this.props.reviews.map(
            // laptop => {
            //     return (
            //         // <li key={laptop.Id}>
            //             <Laptop key={laptop.Id} laptop={laptop} />
            //         // </li>
            //     )
            // }
            this.renderReview
        )
        return (
            <ul>{reviewObjects}</ul>
        )
    }
}

