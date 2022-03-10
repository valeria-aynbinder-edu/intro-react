import React from 'react';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import { AddReviewModal } from './AddReviewModal.js';
import { reviews} from './data.js'
import { Stats } from './Stats.js';
import LaptopsList from './LaptopsList';

//axios.post(http://...../laptops, {data: {id: 1, name: "sdfsdf"}})


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            reviews: reviews,
            selectedKey: "laptops",
            isDisabled: true,
            
            showAddLaptopModal: false,

            title: "",
            review: ""
            
        }

        this.handleSelected = this.handleSelected.bind(this)
        // this.handleClose = this.handleClose.bind(this)
        this.submitReview = this.submitReview.bind(this)
    }

    handleSelected(selectedKey) {
        console.log(`selected ${selectedKey}`)
        this.setState({selectedKey: selectedKey})
    }

    renderMainView() {
        switch (this.state.selectedKey) {
            case "stats":
                return <Stats />
            case "laptops":
                return <LaptopsList reviews={this.state.reviews}/>
            default:
                return null
        }
    }

    submitReview(new_title, new_text) {
        console.log("submitReview")
        this.state.reviews.push({
            title: new_title, 
            text: new_text, 
            laptopId: 1,
            rating: 3})
        this.setState({
            reviews: this.state.reviews.slice(),
            showAddLaptopModal: false
        })
        console.log(this.state.reviews)
    }


    getOption(laptop) {
        return(<option key={laptop.Id}>{laptop.Product}</option>)
    }

    render() {
        return(
            <>
                <Button onClick={() => this.setState({showAddLaptopModal: true})}>Add review</Button>
                <Button onClick={() => this.setState({isDisabled: !this.state.isDisabled})}>Switch Disabled</Button>
                <Nav
                activeKey="laptops"
                onSelect={this.handleSelected} >
                    <Nav.Item>
                        <Nav.Link eventKey="stats">Statistics</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="laptops">Laptops</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="mouses">Mouses</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled={this.state.isDisabled}>
                        Disabled link
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                {this.renderMainView()}
                {/* {this.state.selectedKey == 'laptops' &&
                    <LaptopsList laptops={laptops}/>}
                {this.state.selectedKey == 'keyboards' &&
                    <Keyboards />} */}

                    {/* <AddReviewModal laptops={laptops} 
                    show={this.state.showAddLaptopModal}
                    onAddReviewClose={()=> this.setState({showAddLaptopModal: false})}
                    onSubmit={this.submitReview}/> */}

         {/* <Modal show={show} onHide={handleClose}> */}

            </>
        )
    }

}

export default App;