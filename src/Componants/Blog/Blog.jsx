import React, { useEffect, useState } from 'react';
import './Blog.css';

const Blog = () => {
    const proBlog = () => {
        const [blogs, setBlogs] = useState([]);
        useEffect(() => {
            fetch('fakeData.json')
                .then(res => res.json())
                .then(data => setBlogs(data))
        }, [])
    }
    return (
        <div className='blog-container'>
            <div className='blogs'>
              
            </div>
            <div className='cart-container'>

            </div>
        </div>
    );
};

export default Blog;