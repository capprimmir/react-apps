import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes';


//action creator 
export function  saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    // dispatcher will notify all stores about this action
    dispatcher.dispatch({
      //the action payload
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  })
}