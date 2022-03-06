import React from 'react';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }


//  export class Calculator extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//       this.state = {temperature: ''};
//     }
  
//     handleChange(e) {
//       this.setState({temperature: e.target.value});
//     }
  
//     render() {
//       const temperature = this.state.temperature;
//       return (
//         <fieldset>
//           <legend>Enter temperature in Celsius:</legend>
//           <input
//             value={temperature}
//             onChange={this.handleChange} />
//           <BoilingVerdict
//             celsius={parseFloat(temperature)} />
//         </fieldset>
//       );
//     }
//   }

  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

//   tryConvert('abc', toCelsius) returns an empty string, 
// and tryConvert('10.22', toFahrenheit) returns '50.396'.
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  
class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    //   this.state = {temperature: ''};
    }
  
    handleChange(e) {
    //   this.setState({temperature: e.target.value});
        this.props.onTempChanged(e.target.value)
    }
  
    render() {
    //   const temperature = this.state.temperature;
    const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature}
                onChange={this.handleChange} />
        </fieldset>
      );
    }
  }

 export class Calculator extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            temperature: "",
            scale: "c"
        }

        this.handleCTempChanged = this.handleCTempChanged.bind(this)
        this.handleFTempChanged = this.handleFTempChanged.bind(this)
    }

    handleCTempChanged(newVal) {
        this.setState({temperature: newVal, scale:'c'})
    }

    handleFTempChanged(newVal) {
        this.setState({temperature: newVal, scale:'f'})
    }

    render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
     
    return (
        <div>
          <TemperatureInput scale="c" 
          temperature={celsius} onTempChanged={this.handleCTempChanged}/>
          <TemperatureInput scale="f" 
          temperature={fahrenheit} onTempChanged={this.handleFTempChanged}/>
        </div>
      );
    }
  }