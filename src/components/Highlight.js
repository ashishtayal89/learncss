import React, { memo } from 'react';
import "./highlight.css";

export default memo(function Highlight({ children, ...rest }) {
    return <p className="highlightText" {...rest}> {children} </p>;
})
