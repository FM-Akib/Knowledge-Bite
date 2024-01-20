// import React from 'react';
import { useState } from 'react';
import './BiteContainer.css';
import { useEffect } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

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
                <Bookmark></Bookmark>
            </div>
        </div>
    );
};

export default BiteContainer;