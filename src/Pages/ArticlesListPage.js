import React from 'react';
import ArticleList from '../Components/ArticleList';
import articles from './Article-content';

function ArticlesListPage(){
    return(
        <>
        <h1>Articles</h1>
        <ArticleList article={articles}/>
        </>
    );
};

export default ArticlesListPage;