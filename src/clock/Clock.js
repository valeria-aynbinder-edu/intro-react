import React from 'react';

export class Clock extends React.Component {

    constructor(props) {
    console.log('inside constructor')
      super(props);

      this.state = {
            date: new Date(),
            isToggleOff: true

        };
    
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('handleClick')
        this.setState({
            isToggleOff: !this.state.isToggleOff
        })
        if (this.state.isToggleOff) {
            this.timerID = setInterval(
                () => this.tick(),
                // this.tick,
                1000
          );
        } else {
            clearInterval(this.timerID)
        }
      }
  
    componentDidMount() {
        console.log('inside componentDidMount')
    //     this.timerID = setInterval(
    //         () => this.tick(),
    //         // this.tick,
    //         1000
    //   );

    }
  
    componentWillUnmount() {
        console.log('inside componentWillUnmount')

    //   clearInterval(this.timerID);
    }
  
    tick() {
        console.log('inside tick')
      
        this.setState({
            date: new Date()    
        });

    }
  
    render() {

    let buttonStr = 'Turn On';
    if (!this.state.isToggleOff) {
        buttonStr = 'Turn Off'
    }
        
    console.log('inside render')

      return (
        <div>
            <p>{this.props.name}</p>
            <button onClick={this.handleClick}>
                {buttonStr}
                {/* {this.state.isToggleOff ? 'Turn ON' : 'Turn OFF'} */}
            </button>
            {!this.state.isToggleOff &&
                <h2>It is {this.state.date.toLocaleTimeString(this.props.loc)}</h2>
            }
        </div>
      );
    }
  }