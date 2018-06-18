import React, { Component } from "react";
import { articles } from "../seedData";
import Article from "./Article.js";

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: articles
    };
  }

  render() {
    return this.state.articles.map((article, i) => (
      <Article key={i} item={article} />
    ));
  }
}

export default NewsFeed;
