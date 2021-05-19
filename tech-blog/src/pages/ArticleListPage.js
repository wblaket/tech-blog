import React from 'react';
import articleContent from '../components/article-data';
import ArticlesList from '../components/ArticlesList';

const ArticleListPage = () => {

  return (
    <>
    <div class="article-subject">Articles</div>
    <ArticlesList articles={articleContent} />
    </>
  );
}

export default ArticleListPage;
