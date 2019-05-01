import React, { memo } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { capitalize } from '../utils/stringUpdate';
import './breadCrumb.css';

function BreadCrumb({ history }) {
    let pages = history.location.pathname.split("/");
    return (<div>{pages.map((page, index) => {
        let url = pages.slice(0,++index).join("/");
        if(index === 1 ){
            return <span>{<Link to={url}>{capitalize("Home")}</Link>}</span>
        }
        return <span> > {<Link to={url}>{capitalize(page)}</Link>}</span>
    })}</div>)
}

export default withRouter(memo(BreadCrumb));
