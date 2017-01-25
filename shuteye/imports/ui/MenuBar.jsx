import React, { Component, PropTypes } from 'react';

export default class MenuBar extends Component {
  render() {
    return (
      < title={this.props.task._id}>{this.props.task.text}</li>
    );
  }
}
