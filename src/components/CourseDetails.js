import React, { Fragment, memo } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { capitalize } from '../utils/stringUpdate';
import Layout from './Layout';

function CourseDetails({ courseList, match }) {
    return <Layout type="column" align="center"><h3 style={{"text-decoration":"underline"}}>Topics</h3>{getUrlList({ courseList, match })}</Layout>;
}

function getUrlList({ courseList, match, parentRoute }) {
    let baseUrl = match.url;
    return (<ul>
        {
            Object.keys(courseList).map((key) => {
                let courseUrl = parentRoute ? `${parentRoute}/${key}` : key;
                let finalUrl = `${baseUrl}/${courseUrl}`;
                let description = courseList[key] && typeof courseList[key] !== "object" ?
                    `${capitalize(key)} : ${courseList[key]}` : capitalize(key);
                let link = <li><Link to={finalUrl}>{description}</Link></li>;
                if (typeof courseList[key] === "object") {
                    return (<Fragment>{link}{getUrlList({ courseList: courseList[key], match, parentRoute: key })}</Fragment>);
                } else {
                    return link;
                }
            })
        }
    </ul>)
}

export default withRouter(memo(CourseDetails));
