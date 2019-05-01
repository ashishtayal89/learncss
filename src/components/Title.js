import React, { memo } from 'react';
import "./title.css";

export default memo(function Title({ type, children }) {
    switch (type * 1) {
        case 1: return <h1>{children}</h1>
        case 2: return <h2>{children}</h2>
        case 3: return <h3>{children}</h3>
        case 4: return <h4>{children}</h4>
        default: return <h2>{children}</h2>
    }
})
