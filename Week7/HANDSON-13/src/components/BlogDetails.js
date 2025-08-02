import React from 'react';

const blogs = [
  { title: 'React Learning', author: 'Stephen Biz', desc: 'Welcome to learning React' },
  { title: 'Installation', author: 'Schwozdnier', desc: 'You can install React from npm.' },
];

export default function BlogDetails() {
  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <h3>{blog.title}</h3>
            <p>{blog.author}</p>
            <p>{blog.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
