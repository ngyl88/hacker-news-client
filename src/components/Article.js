import React from "react";
import Vote from "./Vote";

export const Article = (props) => {
  return (
    <div className="article">
      <Vote
        voteCount={props.item.votes}
        upVote={() => props.handleVoting(props.index, 1)}
        downVote={() => props.handleVoting(props.index, -1)}
      />
      <a href={props.item.url}>{props.item.title}</a>
      <p>
        <span className="author">
          {props.item.author === null ? "" : "Author: " + props.item.author}
        </span>
        Published:
        <span className="timestamp">{props.item.publishedAt}</span>{" "}
      </p>
      <p className="description">{props.item.description}</p>
    </div>
  );
}
