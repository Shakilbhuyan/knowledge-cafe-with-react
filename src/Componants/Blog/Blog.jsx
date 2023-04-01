import React, { useEffect, useState } from 'react';
import './Blog.css';
import BlogCart from '../Blog-cart/Blog-cart';
import { toast } from 'react-toastify';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [totalReadTime, setTotalReadTime] = useState(0);
    const [bookmarkedIDs, setBookmarkedIDs] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const onAddRead = (readTime) => {
        setTotalReadTime(totalReadTime + readTime);
    }

    const onBookmark = (id) => {
        if (bookmarkedIDs.indexOf(id) === -1) {
            setBookmarkedIDs([...bookmarkedIDs, id]);
            return;
        }
        toast.info("Already Bookmarked!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div className='blog-container'>
            <div className='blogs'>
                {
                    blogs.map(blog => <BlogCart
                        key={blog.id}
                        blog={blog}
                        onRead={() => onAddRead(blog.readTime)}
                        onBookmark={() => onBookmark(blog.id)}
                    ></BlogCart>)
                }
            </div>
            <div className='cart-container'>
                <h1 className='totalReadTime'>Spent Time on Read: {totalReadTime}</h1>
                {
                    bookmarkedIDs.map(id => {
                        const bookmarkedBlog = blogs.find(blog => blog.id === id);
                        return (
                            <div className='bookmarkedBlog'>
                                {bookmarkedBlog.title}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Blog;