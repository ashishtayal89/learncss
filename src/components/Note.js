import React, { memo } from 'react';
import Highlight from './Highlight';
import "./highlight.css";

export default memo(function Note({ children, rest }) {
    return <Highlight className="highlightText" {...rest}><b>Note : </b> {children} </Highlight>;
})
