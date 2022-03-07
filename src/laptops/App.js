import React from 'react';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import {laptops} from './data.js'
import { Keyboards } from './Keyboards.js';
import LaptopsList from './LaptopsList';
import Modal from 'react-bootstrap/Modal'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedKey: "laptops",
            isDisabled: true,
            showAddLaptopModal: false
        }

        this.handleSelected = this.handleSelected.bind(this)
    }

    handleSelected(selectedKey) {
        console.log(`selected ${selectedKey}`)
        this.setState({selectedKey: selectedKey})
    }

    renderMainView() {
        switch (this.state.selectedKey) {
            case "laptops":
                return <LaptopsList laptops={laptops}/>
            case "keyboards":
                return <Keyboards />
            default:
                return null
        }
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
                        <Nav.Link eventKey="laptops">Laptops</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="keyboards">Keyboards</Nav.Link>
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

        {/* <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal> */}
            </>
        )
    }

}

export default App;