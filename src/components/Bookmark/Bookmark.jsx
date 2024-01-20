// import React from 'react';
import './Bookmark.css';


const Bookmark = (prop) => {
   

    return (
        <div className="BookmarkCom">
            <h3>{prop.bookMark.title}</h3>
        </div>
    );
};

export default Bookmark;