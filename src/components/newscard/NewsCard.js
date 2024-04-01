import React from 'react'
import './NewsCard.scss'

function NewsCard({ news }) {
    return (
        <div className='NewsCard'>
            <img className='NewsCard__image' src={news.urlToImage} alt="news img" />
            <h2 className='NewsCard__title'>{news.title}</h2>
            <p className='NewsCard__desc'>{news.description}</p>

            <button className='NewsCard__readMore btn-primary' onClick={() => window.open(news.url)}>Read More</button>
        </div>
    )
}

export default NewsCard