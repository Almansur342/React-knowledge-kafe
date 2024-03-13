import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handelAddToBookmark = (blog) =>{
   const newBookmarks = [...bookmarks, blog];
   setBookmarks(newBookmarks);
  }

const handleMarkAsRead = (id, time) =>{
  setReadingTime(readingTime + time);
  // console.log("remove", id)
  const remining = bookmarks.filter(bookmark => bookmark.id != id);
  setBookmarks(remining);
}

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handelAddToBookmark= {handelAddToBookmark}
      handleMarkAsRead={handleMarkAsRead}
      ></Blogs>
      <Bookmarks bookmarks = {bookmarks}
      readingTime = {readingTime}
      ></Bookmarks>
      </div>
    </>
  )
}

export default App
