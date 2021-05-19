import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../components/article-data.js';
const ArticlesList =( { articles }) => {

  const fetchData = async () => {
    const result = await fetch(`/api/articles`, {
      method: 'get',
    });
    console.log(result);
  }

    return (
    <div id="article-list">
      {articles.map((article, key) => (
        <div class="article-item">
          <Link key={key} to={`/article/${article.name}`} style={{color: 'black'}}>
            <h3><b>{article.title}</b></h3>
            <p>{article.author} | {article.date}</p>
            <p><i>{article.content[0].substring(0,150)}....</i></p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ArticlesList;
