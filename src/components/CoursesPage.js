import React from 'react';
import { getCourses } from '../api/courseApi';

class CoursePage extends React.Component {
  state = {
    courses: []
  };

  componentDidMount() {
    //get courses from the api. when the call completes, store the array of courses in state
    getCourses().then(courses => this.setState({ courses: courses}))
  }

  //method to tell what to display
  render() {
    return <h2>Courses</h2>
  }
}

export default CoursePage;