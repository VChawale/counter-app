import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags available</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please enter a new tag"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
