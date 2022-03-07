import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';

export class AddReviewModal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "",
            review: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }



    handleSubmit() {
        return this.props.onSubmit(this.state.title, this.state.review)
    }

render () {
    return(
    <Modal show={this.props.show} onHide={this.props.onAddReviewClose}>
    <Modal.Header closeButton>
    <Modal.Title>New Review</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Text>
                <Form.Control 
                    type="text" placeholder="Enter title here..." 
                    value={this.state.title}
                    onChange={(event) => this.setState({title: event.target.value})}/>
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Review</Form.Label>
            <Form.Text>
                <Form.Control 
                    type="text" placeholder="Enter review here..." 
                    value={this.state.review}
                    onChange={(event) => this.setState({review: event.target.value})}/>
            </Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Laptop</Form.Label>
            <Form.Select>
                {this.props.laptops.map(
                    // this.getOption
                    laptop => 
                    {
                        return(<option key={laptop.Id}>{laptop.Product}</option>)
                    }
                    )
                }
            </Form.Select>
        </Form.Group>


        {/* <Button variant="primary" type="submit">
            Submit
        </Button> */}
    </Form>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={this.props.onAddReviewClose}>
        Cancel
    </Button>
    <Button variant="primary" 
        // onClick={() => this.props.onSubmit(this.state.title, this.state.review)}>
        onClick={this.handleSubmit}>
        Save Changes
    </Button>
    </Modal.Footer>
    </Modal> 
    )

}
}