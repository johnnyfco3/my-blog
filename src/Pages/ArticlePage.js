import React from 'react';
import {useParams} from 'react-router-dom';
import ArticleList from '../Components/ArticleList';
import NotFoundPage from './NotFoundPage';
import articles from './Article-content';


function ArticlePage(){
    const {name} = useParams()
    const article = articles.find(article => article.name === name);
    if(!article) return <NotFoundPage />
    const otherArticles = articles.filter(article => article.name !== name)

    return(
        <>
        <h1>{article.title}</h1>
       {article.content.map((paragraph, key) =>(
           <p key={key}>{paragraph}</p>
       ))}
       <h3>Other Articles: </h3>
       <ArticleList article={otherArticles} />
        </>
    );
};

export default ArticlePage;