import React, { memo, Children } from 'react';
import './tab.css';

export default memo(function Tab({ title, active, children, id }) {
    return (<div id={`tab${id}`} className={`tab ${active ? "active" : ""}`}>{children}</div>);
})
