import React, { memo } from 'react';
import "./description.css";

export default memo(function Description(props) {
    let { children } = props;
    return (<div className="description">{children}</div>)
});