import React, { memo } from 'react';
import CardContainer from '../../components/CardContainer';
import Card from '../../components/Card';

export default memo(function index() {
    return (
        <CardContainer cardsInARow={4}>
            <Card title='css' description='Getting started with CSS' link='course/css'/>
            <Card title='js' description='Getting started with JS' link='course/js'/>
        </CardContainer>
    )
})
