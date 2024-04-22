import React from "react";
import '../../../styles/postCard.scss'

export default function PostCard() {

    return(
        <div className="post-card__container">
            <div className="post-card__author-details">
                <img src="" alt="" />
                <p>Author Place Holder</p>
            </div>
            <div className="post-card__title">
                <p>Everything I Know About Creating Buzz, I Learned From Taylor Swift</p>
            </div>
            <div className="post-card__description">
                <p>Scarcity is the one thing you can never have enough of.</p>
            </div>
        </div>
    )
}