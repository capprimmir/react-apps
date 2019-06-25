import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes';


//action creator 
export function  saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    // dispatcher will notify all stores about this action
    dispatcher.dispatch({
      //the action payload
      actionType: course.id 
      ? actionTypes.UPDATE_COURSE
      : actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  })
}

export function loadCourses() {
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses
    });
  })
}