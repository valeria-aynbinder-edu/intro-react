import React from "react";

export class Review extends React.Component {


    render() {
        return (
            <div>
                <p>{this.props.review.title}</p>
                <p>{this.props.review.text}</p>
                <p>{this.props.review.rating}</p>
            </div>
        )
    }
}
export default Review