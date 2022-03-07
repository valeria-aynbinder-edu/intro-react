import React from 'react';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import {laptops} from './data.js'
import { Keyboards } from './Keyboards.js';
import LaptopsList from './LaptopsList';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedKey: "laptops",
            isDisabled: true
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
            </>
        )
    }

}

export default App;