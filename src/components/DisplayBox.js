import React, { memo } from 'react';
import "./displayBox.css";

export default memo(function DisplayBox(props) {
    let { children } = props;
    return (<div className="displayBox">{children}</div>)
});