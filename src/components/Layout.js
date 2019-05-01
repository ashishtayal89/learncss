import React, { memo } from 'react';
import './layout.css';

export default memo(function Layout({ type, children, align }) {

    return <div className={`layout ${type ? type : ""} ${align ? align : ""}`}>{children}</div>
})
