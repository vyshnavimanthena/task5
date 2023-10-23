import React, { Component } from 'react';

class Required extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: '',
      age: null,
    };
  }

  handleDateChange = (e) => {
    this.setState({ dob: e.target.value });
  };

  calculateAge = () => {
    const birthDate = new Date(this.state.dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    this.setState({ age });
  };

  render() {
    return (
      <div>
        <h1>Age Calculator</h1>
        <p>Enter your date of birth</p>
        <div className="d-flex justify-content-center">
        <input
          type="date"
          value={this.state.dob}
          onChange={this.handleDateChange}
          style={{
            borderRadius: '5px',
            width: '300px',
          }}
          className="form-control"
        />
        </div>
        <br/>
        <button onClick={this.calculateAge} class="btn btn-primary px-4">Calculate Age</button>
        {this.state.age !== null && (
          <h2>You are {this.state.age} years old</h2>
        )}
      </div>
    );
  }
}

export default Required;