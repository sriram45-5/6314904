import React, { useState } from 'react';
import './App.css';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';

function App() {
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  return (
    <div className="App">
      <h1>Blogger App</h1>

      <div className="section">
        {showCourses && <CourseDetails />}
        {showBooks ? <BookDetails /> : <p>Book details are hidden</p>}
        {showBlogs ? <BlogDetails /> : null}
      </div>
    </div>
  );
}

export default App;
