import React from 'react';
import './Blog-cart.css';

const BlogCart = ({ blog }) => {
    const { name, title, authorImg, date, coverImg, readTime } = blog;
    console.log(authorImg, coverImg);
    return (
        <div className='blog-cart-container'>
           <img className='cover-img' src={coverImg} alt="" />
            <div>
                <div>
                    <img className='author-img' src={authorImg} alt="" />
                    <p>{name}</p>
                    <p><small>{date}</small></p>
                    <p>{readTime} read</p>
                </div>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default BlogCart;