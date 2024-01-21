// import React from 'react';
import { useState } from 'react';
import './BiteContainer.css';
import { useEffect } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


import toast, { Toaster } from 'react-hot-toast';
import { AddToDB, AddToTimeDB, GetPreviousBM, GetPreviousTime } from '../../Utilities/fakedb';
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


    useEffect(() => {
          const previousBM=GetPreviousBM();
          const previousMarked=[];

          for(const id in previousBM){
            const blogBM=blogs.find(b=>b.id==id);
            if(blogBM){
                previousMarked.push(blogBM);
            }
          }
          setBookmarks(previousMarked)
    },[blogs])


    useEffect(()=>{
       const previousTime=GetPreviousTime();
       setTotalTime(previousTime)
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
        AddToDB(newblog.id)
        BookmarkNotify()
    }

    
    const MarkAsRead=(time)=>{
        const TimeAdded=TotalTime+time;
        setTotalTime(TimeAdded) 
        ReadNotify()

        AddToTimeDB(TimeAdded);
    }
    
    const DeleteFromLocalStorage=()=>{
        localStorage.removeItem('bookmared')
        localStorage.removeItem('totalTime')
        setTotalTime(0)
        setBookmarks([])


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
                <h3><FontAwesomeIcon icon={faClock} style={{color: "#ffd500",}} />  Spent time on read : {TotalTime} min</h3>    
                <button onClick={()=>{DeleteFromLocalStorage()}} title="Remove all Bookmark." className="bookmark-trash-btn"><FontAwesomeIcon className="trash-icn" icon={faTrash} /> </button>
                </div>


                <div className="Bookmark-Holder">
                <h2><FontAwesomeIcon icon={faBookBookmark} />  Total Bookmark: {bookMarks.length}</h2>
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