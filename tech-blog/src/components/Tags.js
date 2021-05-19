import React from 'react';
import {Button} from 'react-bootstrap';

const Tags = ( { articleName, tags, setArticleInfo }) => {
  console.log(typeof(tags));
  const tagArray = Object.values(tags);
  console.log(tagArray[0]);
  console.log(typeof(tagArray));

  return (

    <div class="tags-section">
    <h3>Tags</h3>
      {tagArray.map((tag, key) => (
        <Button variant="success"><a key={key}>{tag}</a></Button>
      ))}
    </div>
  );
};

export default Tags;
