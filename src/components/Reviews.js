import React, { Component } from "react";

export default class Reviews extends Component {
  constructor() {
    super();
    this.onClickHandler = this.onClick.bind(this);
  }

  state = {
    showReviews: false,
  }

  render() {
    const { product } = this.props;
    const numReviews = product.reviews.length;
    const reviews = product.reviews.map((r) => {
      return <li key={r.id}>{r.description}</li>;
    });
    return (
      <div>
        {numReviews} <a onClick={this.onClickHandler}>Review{numReviews > 1 ? "s" : ""}</a>
        <ul>
          {this.state.showReviews ? reviews : null}
        </ul>
      </div>
    );
  }

  onClick() {
    this.setState({ showReviews: !this.state.showReviews });
  }
}
