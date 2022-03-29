import React, { Component } from 'react';
import InfoInputs from './InfoInputs';

export default class Form extends Component {
  render() {
    return (
      <div className="generalSection">
        <form onSubmit={this.props.onSubmit}>
          <InfoInputs
            name="name"
            type="type"
            placeholder="Name"
            onChange={this.props.onChange}
            data={this.props.data}
          />
          <InfoInputs
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.props.onChange}
            data={this.props.data}
          />
          <InfoInputs
            name="phone"
            type="tel"
            placeholder="Phone"
            onChange={this.props.onChange}
            data={this.props.data}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
