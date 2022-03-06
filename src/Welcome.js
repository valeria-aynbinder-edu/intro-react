import React from 'react';



export class Welcome extends React.Component {

    // constructor(props) {
    //   super(props)
    // }
  
    render() {
        console.log('render Welcome')

        if (!this.props.loggedIn) {
            return null;
        }


      return(
      <div>
        <h1>Hello, {this.props.name}</h1>
        <p>Birth date: {this.props.birth_date}</p>
        <p></p>
      </div>
      )
    }
  
  }