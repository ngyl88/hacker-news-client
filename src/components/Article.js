import React, { Component } from "react";
import Vote from "./Vote";

class Article extends Component {
  constructor(props) {
    super();
    this.title = props.item.title;
    this.url = props.item.url;
    this.author = props.item.author;
    this.publishedAt = props.item.publishedAt;
    this.state = {
      description: props.item.description,
      votes: props.item.votes
    };
  }

  render() {
    return (
      <div className="article">
        <Vote
          voteCount={this.state.votes}
          upVote={() => this.handleVoting(1)}
          downVote={() => this.handleVoting(-1)}
        />
        <a href={this.url}>{this.title}</a>
        <p>
          <span className="author">
            {this.author === null ? "" : "Author: " + this.author}
          </span>
          Published:
          <span className="timestamp">{this.publishedAt}</span>{" "}
        </p>
        <p className="description">{this.state.description}</p>
      </div>
    );
  }

  handleVoting(voteChange) {
    this.setState({
      votes: this.state.votes + voteChange
    });
  }
}

export default Article;
