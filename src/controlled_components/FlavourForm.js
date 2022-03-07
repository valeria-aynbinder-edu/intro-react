import React from 'react';

export class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //   value: 'coconut', 
        //   textAreaVal: 'Blabla',
          formData: {flavour: 'coconut', text: 'blabla'}
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
    //   this.setState({value: event.target.value});
      this.setState({formData: {flavor: event.target.value}});
    }
  
    handleSubmit(event) {
    //   alert('Your favorite flavor is: ' + this.state.value + ' and the text is: ' + this.state.textAreaVal);
      alert('You sybmitted:' + this.state.formData);

      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            {/* <select value={this.state.value} onChange={this.handleChange}> */}
            <select value={this.state.formData.flavour} onChange={this.handleChange}>

              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          {/* <textarea value={this.state.textAreaVal} onChange={(event) => this.setState({textAreaVal: event.target.value})}></textarea> */}
          <textarea value={this.state.formData.text} onChange={(event) => this.setState({formData: {text: event.target.value}})}></textarea>

          <input type="submit" value="Submit" />
        </form>
      );
    }
  }