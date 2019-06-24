import React, { useState } from 'react';
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';
import { toast } from 'react-toastify';

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({}); 
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

  function formIsValid() {
    // ( _ ) helps to differentiate from errors in useState
    const _errors = {};

    if (!course.title) _errors.title ="Title is requiere";
    if (!course.authorId) _errors.authorId ="Author ID is requiere";
    if (!course.category) _errors.category ="Category is requiere";

    setErrors(_errors);

    //the form is valid of the errors object has no properties
    return Object.keys(_errors).lenght === 0;

  }

  function handleSubmit(event) {
    //prevent the event sent to the server. Instead handle in client
    event.preventDefault();

    if(!formIsValid()) return;
    //all func in api return a promise
    courseApi.saveCourse(course).then( () => {
      props.history.push("/courses");
      toast.success('Course Saved!')
    });

  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm 
        errors={errors}
        course={course} 
        onChange={handleChange} 
        onSubmit={handleSubmit}/>
    </>
  )
}

export default ManageCoursePage;