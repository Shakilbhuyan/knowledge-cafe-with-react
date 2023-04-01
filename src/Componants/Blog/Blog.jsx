import React, { useEffect, useState } from 'react';
import './Blog.css';
import BlogCart from '../Blog-cart/Blog-cart';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='blog-container'>
            <div className='blogs'>
            {
                blogs.map(blog =><BlogCart
                     key={blog.id}
                     blog={blog}
                ></BlogCart>)
            }
            </div>
            <div className='cart-container'>
              <h1>This is cart</h1>
            </div>
        </div>
    );
};

export default Blog;