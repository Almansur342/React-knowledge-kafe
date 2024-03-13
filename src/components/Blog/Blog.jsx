import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog,handelAddToBookmark,handleMarkAsRead}) => {
  const {id,title, cover,author_img,posted_date,reading_time,author,hashtags} = blog;
  return (
    <div className='mb-20 space-y-4'>
      <img className='w-full mb-7 rounded-lg' src={cover} alt={`Cover picture of the title ${title}`} />
      <div className='flex justify-between items-center mb-4 '>
        <div className='flex gap-4 items-center'>
            <img className='h-16 rounded-full' src={author_img} alt="" />
            <div>
              <h3 className='text-2xl'>{author}</h3>
              <p>{posted_date}</p>
            </div>
        </div>
        <div className='flex items-center'>
          <span className='mr-3'>{reading_time} min red</span>
          <button onClick={() => handelAddToBookmark(blog)} className='text-red-600 text-2xl'><FaBookmark /></button>
        </div>
      </div>
      <h2 className='text-4xl'>{title}</h2>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
        }
      </p>
      <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-800 font-bold underline'>Mark as Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handelAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
}

export default Blog;