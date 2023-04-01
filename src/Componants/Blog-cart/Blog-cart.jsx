import React from 'react';
import './Blog-cart.css';
import {FaBookmark} from "react-icons/fa";
const BlogCart = ({ blog, onRead, onBookmark}) => {
    const { name, title, authorImg, date, coverImg, readTime } = blog;
    return (
        <div className='blog-cart-container'>
           <img className='cover-img' src={coverImg} alt="" />
            <div >
                <div className='blog-info'>                    
                    <div className='author-info'>
                        <img className='author-img' src={authorImg} alt="" />
                        <div>
                            {name} <br />
                            <small>{date}</small>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px"}}>
                        <p>{readTime} min read</p>
                        <FaBookmark onClick={onBookmark}/>
                    </div>
                </div>
                <h2>{title}</h2>
                <button className='btn-read' onClick={onRead}>Mark as read</button>
            </div>
        </div>
    );
};

export default BlogCart;