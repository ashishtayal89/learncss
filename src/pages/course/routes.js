import React from 'react';
import { Route } from 'react-router-dom';
import Css from './css';
import Js from './js';
import './routes.css';

export default ({ match }) => (
    <div className="course">
        <Route path={`${match.url}/css`} component={Css} />
        <Route path={`${match.url}/js`} component={Js} />
    </div>)