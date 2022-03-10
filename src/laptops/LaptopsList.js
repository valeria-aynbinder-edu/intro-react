import React from 'react';
import {Laptop} from './Laptop'
// import {reviews} from "./data.js";
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';


export default class LaptopsList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            laptops: [],
            hasNext: true,
            
        }

        this.source = axios.CancelToken.source();
        this.nextUrl = "http://127.0.0.1:8000/laptops/api/laptops"

        this.renderLaptop = this.renderLaptop.bind(this)
        this.loadLaptops = this.loadLaptops.bind(this)
    }

    componentDidMount() {
        // axios
        // .get('http://127.0.0.1:8000/laptops/api/laptops')
        // .then(res => {
        //     // if (res)
        //     this.setState({laptops: res.data})
        // })
    }


    renderLaptop(laptop, index, laptops) {
        // console.log(reviews)
        // let reviewsList = this.props.reviews.filter((elem) => elem.laptopId === laptop.Id);
        return (
            // <li key={laptop.Id}>
                <Laptop key={laptop.id} laptop={laptop}/>
            // </li>
        )
    }

    loadLaptops() {
        axios
        .get(this.nextUrl, {
            cancelToken: this.source.token
          })
        .then(res => {
            if (res.status == 200) {
                this.setState({laptops: [...this.state.laptops,...res.data.results], 
                    hasNext: res.data.next != null})
                this.nextUrl = res.data.next
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    componentWillUnmount() {
        this.source.cancel("Request cancelled")
    }
    
    render() {
        let laptopsObjects = this.state.laptops.map(
            this.renderLaptop
        )
        return(
        <InfiniteScroll
            pageStart={1}
            loadMore={this.loadLaptops}
            hasMore={this.state.hasNext}
            loader={<h1 className="loader" key={0}>Loading ...</h1>}>
        {laptopsObjects} 
        </InfiniteScroll>
        )
    }
}

