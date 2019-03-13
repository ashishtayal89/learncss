import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Courses from './pages/course/routes';

export default function routes(props) {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/course" component={Courses} />
        </Switch>
    )
}
