import React, { memo } from 'react';

export default memo(function Image({ image, alt, ...rest }) {
    return <img style={{ "maxWidth": "100%" }} src={image} alt={alt} {...rest} />;
})
