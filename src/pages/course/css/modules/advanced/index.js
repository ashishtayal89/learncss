import React, { Fragment } from 'react';
import CourseDetails from '../../../../../components/CourseDetails';
import courseList from '../../courseDetails.json';
import Description from '../../../../../components/Description';
import Layout from '../../../../../components/Layout';

export default function Advanced() {
    return (
        <Layout type="column">
            <CourseDetails courseList={courseList.advanced} />
            <Description>
                <b>This section covers advanced CSS topics</b>
                <div>
                    We can classify these properties with respect to a box as follows
                    <ul>
                        <li>
                            <b>Box Styling</b>
                            <ul>
                                <li>Rounded Corners</li>
                                <li>Border Image</li>
                                <li>Background</li>
                                <li>Color</li>
                                <li>Gradient</li>
                                <li>Shadows</li>
                                <li>Text Effects</li>
                                <li>Web Fonts</li>
                                <li>Object Fit</li>
                                <li>Multi Column</li>
                            </ul>
                        </li>
                        <li>
                            <b>Box Sizing</b>
                            <ul>
                                <li>User Interface</li>
                                <li>Box Sizing</li>
                            </ul>

                        </li>
                        <li>
                            <b>Box Placement</b>
                            <ul>
                                <li>Transform</li>
                                <li>Flex Box</li>
                            </ul>
                        </li>
                        <li>
                            <b>Anonymous</b>
                            <ul>
                                <li>Transition</li>
                                <li>Animation</li>
                                <li>Variables</li>
                                <li>Media Queries</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Description>
        </Layout>);
}
