import React, {useState, useEffect} from 'react';
import articleContent from '../components/article-data';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import Comments from '../components/Comments';
import CommentForm from '../components/CommentForm';
import UpVotes from '../components/UpVotes';
import Tags from '../components/Tags';
import {Button} from 'react-bootstrap';

const ArticlePage = ( {match} ) => {

  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [], tags: [], subject: "" });


  useEffect(() => {
          const fetchData = async () => {
              const result = await fetch(`/api/articles/${name}`);
              const body = await result.json();
              console.log(body);
              setArticleInfo(body);
          }
          fetchData();
  }, [name]);

  if (!article) return <NotFoundPage />


  return (
    <>
      <div class="article-subject"> {articleInfo.subject}</div>
      <div class="article-header">{articleInfo.title} </div>
      <h2> {articleInfo.author} {articleInfo.date}</h2>


      <div class="article-body">
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
      </div>
      <hr />
      <Tags articleName={name} tags={articleInfo.tags} setArticleInfo={setArticleInfo} />
      <UpVotes articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />

      <hr />
      <Comments comments={articleInfo.comments} />
      <CommentForm articleName={name} setArticleInfo={setArticleInfo} />
    </>

  );
}

export default ArticlePage;
