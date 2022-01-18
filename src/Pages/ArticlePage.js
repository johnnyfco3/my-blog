 import {React, useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ArticleList from '../Components/ArticleList';
import NotFoundPage from './NotFoundPage';
import articles from './Article-content';
import CommentsList from '../Components/CommentsList';
import UpvotesSection from '../Components/UpvotesSection';
import AddCommentForm from '../Components/AddCommentForm';


function ArticlePage(){
    const {name} = useParams()
    const article = articles.find(article => article.name === name);
    
    const[articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: []});
    
    useEffect(()=> {
        const fetchData = async () =>{
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if(!article) return <NotFoundPage />
    const otherArticles = articles.filter(article => article.name !== name)

    return(
        <>
        <h1>{article.title}</h1>
        <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
        {article.content.map((paragraph, key) =>(
            <p key={key}>{paragraph}</p>
        ))}
        <CommentsList comments={articleInfo.comments} />
        <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
        <h3>Other Articles: </h3>
        <ArticleList article={otherArticles} />
        </>
    );
};

export default ArticlePage;