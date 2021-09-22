import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  //   styles = {
  //     fontSize: 10,
  //     fontWeight: "bold",
  //   };

  render() {
    return (
      <React.Fragment>
        {/* <span style={{ fontSize: 50 }} className="badge badge-primary m-2"> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Incement</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;