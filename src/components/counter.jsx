import React, { Component } from "react";

class Counter extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Component is unmounting");
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col-md-auto">
            <button
              onClick={() =>
                this.props.hanldeIncrementClick(this.props.counter)
              }
              className="btn btn-secondary btn-sm"
            >
              +
            </button>

            <button
              onClick={() =>
                this.props.handleDecrementClick(this.props.counter)
              }
              disabled={this.getDisabledStatus()}
              className="btn btn-secondary btn-sm"
            >
              -
            </button>

            <button
              className="btn-danger btn btn-sm m-2"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }

  getDisabledStatus() {
    return this.props.counter.value === 0 ? true : false;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
