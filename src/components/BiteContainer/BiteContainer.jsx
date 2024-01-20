// import React from 'react';
import { useState } from 'react';
import './BiteContainer.css';
import { useEffect } from 'react';
import Blog from '../Blog/Blog';

const BiteContainer = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])
   
    return (
        <div className="BiteContainer">
            <div className="blogs">
                {
                    blogs.map(blog=><Blog
                    key={blog.id}
                    blog={blog}
                    ></Blog>)
                }
            </div>
            <div className="bookmark">
                BookmarkS
            </div>
        </div>
    );
};

export default BiteContainer;