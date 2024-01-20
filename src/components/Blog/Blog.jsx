// import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


const Blog = (prop) => {
    const {img,title,profile,name,readTime}=prop.blog;
    const token1 = prop.blog.tag[0];
    const token2 = prop.blog.tag[1];

const MarkAsRead=prop.MarkAsRead;
const BookmarkBlog=prop.BookmarkBlog;

    return (
        <div className='Blog'>
            <img src={img} alt="blog"/>

            <div className='UserInfo'>
                <div className='userIN'>
                <img src={profile} alt="profile"/>
                <div className='userName'>
                    <h4>{name}</h4>
                    <p>13 January</p>
                </div>
                </div>
                <div className='bookmarkSection'>
                <p>{readTime} min read</p>
                <button onClick={()=>{BookmarkBlog(prop.blog)}} className='bookmark-btn'><FontAwesomeIcon className='bookmark-icn' icon={faBookmark} /></button>
                </div>
            </div>


            <h2 className='title'>{title}</h2>
            <p className='tag'>#{token1}  #{token2}</p>
            <button onClick={()=>{MarkAsRead(prop.blog.readTime)}} className='markRead-btn'>Mark As Read</button>
        </div>
    );
};

export default Blog;