import React, { useState, useEffect } from 'react';
import CourseForm from './CourseForm';
import courseStore from "../stores/courseStore";
import { toast } from 'react-toastify';
import * as courseActions from '../actions/courseActions';

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

  useEffect( () => {
    const slug = props.match.params.slug; // from the path '/course/:slug'
    if(slug){
      setCourse(courseStore.getCourseBySlug(slug));
    }
  }, [props.match.params.slug])

  
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

    //the form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;

  }

  function handleSubmit(event) {
    //prevent the event sent to the server. Instead handle in client
    event.preventDefault();

    if (!formIsValid()) return;
    //all func in api return a promise
    courseActions.saveCourse(course).then( () => {
      props.history.push("/courses");
      toast.success('Course Saved!');
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