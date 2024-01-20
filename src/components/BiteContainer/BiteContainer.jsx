// import React from 'react';
import { useState } from 'react';
import './BiteContainer.css';
import { useEffect } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.error("Already Bookmarked!!")
const ReadNotify=()=>toast.success('Read Complete!')
const BookmarkNotify=()=>toast.success('Blog Bookmarked.', {
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
    iconTheme: {
      primary: '#713200',
      secondary: '#FFFAEE',
    },
  });

const BiteContainer = () => {
    const [blogs,setBlogs]=useState([]);
    const [bookMarks,setBookmarks] = useState([]);
    const [TotalTime,setTotalTime] = useState(0);

    useEffect(() => {
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])


    const BookmarkBlog=(newblog)=>{

        for(const blog of bookMarks){
            
             if(blog.id === newblog.id){
                notify();
                return;
             }
        }
            

        const newBookmark=[...bookMarks,newblog]
        setBookmarks(newBookmark)
        console.log(bookMarks) 
        BookmarkNotify()
    }

    
    const MarkAsRead=(time)=>{
        setTotalTime(TotalTime+time) 
        ReadNotify()

    }
    
   
    return (
        <>
        <div><Toaster/></div>
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
                <h3>Spent time on read : {TotalTime} min</h3>    
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
        </>
    );
};

export default BiteContainer;