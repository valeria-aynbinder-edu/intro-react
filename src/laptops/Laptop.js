import React from 'react';
import { Price } from './Price';
import { Title } from './Title';
import {LaptopDetails} from './LaptopDetails'
import Nav from 'react-bootstrap/Nav'

export class Laptop extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            displayMore: false
        }
    }

    render() {
        return (
            <div>
                <Title name={this.props.laptop.Product + " (" + this.props.laptop.Company + ")"}/>
                <Price price={this.props.laptop.Price}/>
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
            </div>
        )
    }

}