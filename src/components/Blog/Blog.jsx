// import React from 'react';
import './Blog.css';

const Blog = (prop) => {
    const {img,title,profile,name,readTime}=prop.blog;
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
                <div>
                <p>{readTime}</p>
                <button>B</button>
                </div>
            </div>
            <h2 className='title'>{title}</h2>
        </div>
    );
};

export default Blog;