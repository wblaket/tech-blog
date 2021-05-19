import React from 'react';
import {Button} from 'react-bootstrap';
const UpVotes = ( { articleName, upvotes, setArticleInfo }) => {
  const upVoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: 'post',
    });

    console.log(result);
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <>
    <div id="upvotes-section">
      <Button id="upvote"><a onClick={() => upVoteArticle()}>Thumbs Up</a></Button>
      <p> This post has been given {upvotes} thumbs up!</p>
    </div>
    </>
  );
};

export default UpVotes;
