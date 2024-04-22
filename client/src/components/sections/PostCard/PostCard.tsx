import React from "react";
import '../../../styles/postCard.scss'

export default function PostCard() {

    return(
        <div className="post-card__container">
            <div className="post-card__author-details">
                <img src={require("../../../assets/placeholder.webp")} alt="" className="post-card__avatar"/>
                <p className="post-card__author">Giovanni Colantonio</p>
            </div>
            <div>
                <p className="post-card__title">Everything I Know About Creating Buzz, I Learned From Taylor Swift</p>
            </div>
            <div>
                <p className="post-card__description">Scarcity is the one thing you can never have enough of.</p>
            </div>
            <div className="post-card__additional-properties">
                <p className="post-card__read-time">5 min read</p><span>.</span>
                <p className="post-card__publish-date">Feb 21, 2017</p><span>.</span>
                <p className="post-card__article-type">Economics</p>
            </div>
        </div>
    )
}