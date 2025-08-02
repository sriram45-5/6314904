import React from 'react';

const courses = [
  { name: 'Angular', date: '4/5/2021' },
  { name: 'React', date: '6/3/2021' },
];

export default function CourseDetails() {
  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course.name} - {course.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
