import React from 'react';
import Nav from 'react-bootstrap/Nav'
import {laptops} from './data.js'
import LaptopsList from './LaptopsList';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedKey: "laptops"
        }

        this.handleSelected = this.handleSelected.bind(this)
    }

    handleSelected(selectedKey) {
        console.log(`selected ${selectedKey}`)
        this.setState({selectedKey: selectedKey})
    }

    render() {
        return(
            <>
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
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                        Disabled link
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                {this.state.selectedKey == 'laptops' &&
                    <LaptopsList laptops={laptops}/>}
            </>
        )
    }

}

export default App;