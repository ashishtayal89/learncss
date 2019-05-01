import React, { memo } from 'react';
import './container.css';

export default memo(function Layout({ children }) {
    return <div className={`container`}>{children}</div>
})