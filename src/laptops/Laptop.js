import React from 'react';
import { Price } from './Price';
import { Title } from './Title';
import {LaptopDetails} from './LaptopDetails'
import Nav from 'react-bootstrap/Nav'
import ReviewsList from "./Reviews/ReviewsList";

export class Laptop extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            displayMore: false,
            displayViews:false
        }
    }



    render() {
        return (
            <div>
                <Title name={this.props.laptop.product_name + " (" + this.props.laptop.manufacturer + ")"}/>
                <Price price={this.props.laptop.price_euro}/>
                {   !this.state.displayMore &&
                    <Nav.Link onClick={() => this.setState({displayMore: !this.state.displayMore})}>more...</Nav.Link>
                }
                {
                    this.state.displayMore &&
                    <LaptopDetails laptop={this.props.laptop}/>
                }
                {   this.state.displayMore &&
                    <Nav.Link onClick={() => this.setState({displayMore: !this.state.displayMore})}>less...</Nav.Link>
                }
                {/* <p>Total Reviews:{this.props.reviews.length}</p> */}
                {/* {!this.props.reviews.length ? 'No reviews yet': <Nav.Link onClick={() => this.setState({displayViews:!this.state.displayViews})}>{this.state.displayViews?'Hide Reviews':'Display Reviews'}</Nav.Link>} */}

                {/* {this.state.displayViews && <ReviewsList reviews={this.props.reviews}/>} */}
            </div>
        )
    }

}