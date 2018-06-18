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
      }
  }

  render() {
    return (
      <div className="article">
        <Vote voteCount={this.state.votes} upVote={this.handleUpVote} downVote={this.handleDownVote} />
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

  handleVoteChange(newVoteCount) {
    this.setState({
        votes: newVoteCount
    })
  }

  handleUpVote = () => {
      this.handleVoteChange(this.state.votes + 1);
  }

  handleDownVote = () => {
      this.handleVoteChange(this.state.votes - 1);
  }

}

export default Article;
