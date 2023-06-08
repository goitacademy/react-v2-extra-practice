import React from "react";

export default class ContactUsForm extends React.Component {
  state = {
    department: "",
    message: "",
    agreedToTerms: false,
  };

  handleChange = (event) => {
    const { type, name, value, checked } = event.target;
    const updatedValue = type === "checkbox" ? checked : value;
    this.setState({ [name]: updatedValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select
          name="department"
          value={this.state.department}
          onChange={this.handleChange}
        >
          <option value="">Select...</option>
          <option value="hr">Human Resources</option>
          <option value="pr">Public Relations</option>
          <option value="support">Support</option>
        </select>
        <br />
        <br />
        <textarea
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
          cols="30"
          rows="10"
        />
        <br />
        <input
          type="checkbox"
          name="agreedToTerms"
          checked={this.state.agreedToTerms}
          onChange={this.handleChange}
        />
        I agree to the terms and conditions.
        <br />
        <button>Send</button>
        <pre>{JSON.stringify(this.state, null, " ")}</pre>
      </form>
    );
  }
}
