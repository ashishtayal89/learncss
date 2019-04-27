import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import courseList from '../../../config/courses/js.json';

export default memo(function CourseDetails() {
  return (
    <dl>
      <dt><Link to='avs'>Coffee</Link></dt>
      <dd>Black hot drink</dd>
      <dt>Milk</dt>
      <dd>White cold drink</dd>
    </dl>
  )
})