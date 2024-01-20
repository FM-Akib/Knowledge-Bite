// import React from 'react';
import { useState } from 'react';
import './BiteContainer.css';
import { useEffect } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const BiteContainer = () => {
    const [blogs,setBlogs]=useState([]);
    const [bookMarks,setBookmarks] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])


    const BookmarkBlog=(blog)=>{

        const newBookmark=[...bookMarks,blog]
        setBookmarks(newBookmark)
        console.log(bookMarks) 
    }

    // let totaltime = 0;
    const MarkAsRead=(time)=>{
    //    totaltime+=time;
    //    console.log(totaltime);
    }
    
   
    return (
        <div className="BiteContainer">
            <div className="blogs">
                {
                    blogs.map(blog=><Blog
                    key={blog.id}
                    blog={blog}
                    MarkAsRead={MarkAsRead}
                    BookmarkBlog={BookmarkBlog}
                    ></Blog>)
                }
            </div>
            <div className="bookmark">

                <div className="TimeShow">
                <h3>Spent time on read : 0 min</h3>    
                </div>


                <div className="Bookmark-Holder">
                     <h2>Total Bookmark: {bookMarks.length}</h2>
                {
                    bookMarks.map(bookMark=> <Bookmark
                     key={bookMark.id}
                     bookMark={bookMark}
                    ></Bookmark>)
                }               
         
         </div>

            </div>
        </div>
    );
};

export default BiteContainer;