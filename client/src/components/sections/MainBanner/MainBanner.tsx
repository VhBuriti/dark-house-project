import React from "react";
import '../../../styles/banners.scss'

export default function MainBanner() {

    return(
        <div className="main-banner__container">
            <div className="main-banner__inner-container">
                <span className="main-banner__title">Stay Curious.</span>
                <span className="main-banner__subtitle">Transform Your Ideas into Masterpieces: Where Every Word Ignites Imagination</span>
                <button className="main-banner__btn">Start Reading</button>
            </div>
        </div>
    )
}