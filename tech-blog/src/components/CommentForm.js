import React, { useState } from 'react';

import {Button, Form, Col} from 'react-bootstrap'
const CommentForm = ( {articleName, setArticleInfo}) => {

  const [username, setUserName] = useState('');
  const [commentText, setCommentText] = useState('');


  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'post',
      body: JSON.stringify({ username, text: commentText}),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const body = await result.json();
    setArticleInfo(body);
    setUserName('');
    setCommentText('');
  }

  return (
    <>
    <div class="centered">
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" value={username} onChange={(event) => setUserName(event.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Comment:</Form.Label>
          <Form.Control type="textarea" rows={5} value={commentText} onChange={(event) => setCommentText(event.target.value)} />
        </Form.Group>

        <Button variant="success"><a onClick={() => addComment()}>Add Comment </a></Button>
      </Form>
    </div>
    </>
  );
}
export default CommentForm;
