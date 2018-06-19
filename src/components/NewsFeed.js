import React, { Component } from "react";
import { articles } from "../seedData";
import { Article } from "./Article.js";

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: articles
    };
  }

  render() {
    return this.state.articles.map((article, i) => (
      <Article key={i} item={article} index={i} handleVoting={this.handleVoting}/>
    ));
  }

  handleVoting = (index, voteChange) => {
    const selectedArticle = this.state.articles[index];
    const newVoteCount = selectedArticle.votes + voteChange;
    const newArticle = {
      ...selectedArticle,
      votes: newVoteCount
    };
    this.setState({
      articles: [
        ...this.state.articles.slice(0, index),
        newArticle,
        ...this.state.articles.slice(index + 1)
      ]
    });
  }
}

export default NewsFeed;
