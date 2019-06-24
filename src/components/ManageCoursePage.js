import React, { useState } from 'react';
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';

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

  function handleSubmit(event) {
    //prevent the event sent to the server. Instead handle in client
    event.preventDefault();

    //all func in api return a promise
    courseApi.saveCourse(course).then( () => {
      props.history.push("/courses");
    });

  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm 
        course={course} 
        onChange={handleChange} 
        onSubmit={handleSubmit}/>
    </>
  )
}

export default ManageCoursePage;