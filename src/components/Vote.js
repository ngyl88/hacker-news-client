import React from "react";

const Vote = props => {
  return (
    <div className="votes">
      <span>
        <div className="vote down-vote" onClick={props.downVote} />
      </span>
      <span>
        <div className="vote up-vote" onClick={props.upVote} />
      </span>
      <span className="voteCount">Votes: {props.voteCount}</span>
    </div>
  );
};

export default Vote;
