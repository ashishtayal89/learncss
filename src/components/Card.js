import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './card.css';

export default memo(function Card(props) {
    const { title, description, link } = props;
    const card = (<div className='card'>
        <div className='header'>
            <span>{title}</span>
        </div>
        <div className='footer'>
            <span>{description}</span>
        </div>
    </div>);
    return (
        link ? <Link to={link} className='noDecoration'>{card}</Link> : card
    )
});

