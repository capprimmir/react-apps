import React, { useState } from 'react';
import CourseForm from './CourseForm';

const ManageCoursePage = (props) => {
  //hold course data
  const [course, setCourse] = useState ({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  function handleChange(event) {
    //distructure
    const { target } = event;
    //set a copy of course and set the title from what was passed from the event
    const updatedCourse = {...course, [target.name]: target.value};
    setCourse(updatedCourse);

  }
  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handleChange}/>
    </>
  )
}

export default ManageCoursePage;