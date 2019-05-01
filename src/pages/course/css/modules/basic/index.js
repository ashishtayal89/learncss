import React, { Fragment } from 'react';
import CourseDetails from '../../../../../components/CourseDetails';
import courseList from '../../courseDetails.json';
import Description from '../../../../../components/Description';
import Layout from '../../../../../components/Layout';

export default function Basic() {
    return (
        <Layout type="column">
            <CourseDetails courseList={courseList.basic} />
            <Description>
                <b>This section covers basic CSS topics</b>
                <div>
                    The topics have been categorized as follows
                    <ul>
                        <li><b>Into</b></li>
                        <ul>
                            <li>Syntax</li>
                            <li>Types</li>
                            <li>Box Model</li>
                        </ul>
                        <li><b>Selectors</b></li>
                        <ul>
                            <li>Combinators</li>
                            <li>Pseudo-class</li>
                            <li>Pseudo-element</li>
                            <li>Specificity</li>
                        </ul>
                        <li><b>Box Styling</b></li>
                        <li><b>Box Sizing</b></li>
                        <li><b>Box Placement</b></li>
                        <li><b>Anonymous</b></li>
                        <li><b>Implementation Examples</b></li>
                    </ul>
                </div>
            </Description>
        </Layout>);
}
