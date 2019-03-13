import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import courseDetails from './courseDetails';

export default function index({ match }) {
  return (
    <Fragment>
      <Route path={`${match.url}`} component={courseDetails} />
    </Fragment>
  )
}
