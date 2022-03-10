import React from 'react';
import axios from 'axios'
import Badge from 'react-bootstrap/Badge'
import Spinner from 'react-bootstrap/Spinner'

export class Stats extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            totals: {},
            isLoading: true,
        }
    }

    componentDidMount() {
        axios
        .get('http://127.0.0.1:8000/laptops/api/stats/totals')
        .then(res => {
            console.log(res)
            if (res.status == 200) {
                
                this.setState({totals: res.data, isLoading: false})
            }
        })
    }

    render() {
        return(
            <>
                {this.state.isLoading 
                ? 
                <Spinner animation="grow" variant="primary" />
                :
                <>
                <h2>
                    Statistics
                </h2>
                <h3>Total income: <Badge pill bg="primary">
                    {this.state.totals.total_income}
                </Badge></h3>
                </>
                }
            </>

        )
    }
}