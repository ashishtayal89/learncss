import React from 'react';
import CourseDetails from '../../../components/CourseDetails';
import courseList from './courseDetails.json';
import Routes from './routes';

export default function index({ match }) {
  const {isExact} = match;
  return (
    isExact ? <CourseDetails courseList={courseList} /> : <Routes/>
  )
}
