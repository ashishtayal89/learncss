import React, { Fragment } from 'react';
import DisplayBox from '../../../../../../components/DisplayBox';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import "./background.css";
import flower from './assets/img_flwr.gif';
import paper from './assets/paper.gif';

export default function Background() {
    return (
        <Fragment>
            <Layout type="column">
                <Container>
                    <Title>1. background</Title>
                    <DisplayBox>
                        <div id="example1">
                            <h1>Lorem Ipsum Dolor</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </DisplayBox>
                    <DisplayBox>
                        <div id="example2">
                            <h1>Lorem Ipsum Dolor</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </DisplayBox>
                    <Description>
                        <Image image={flower} alt="flower" /> <b>Flower Image</b>
                        <Image image={paper} alt="paper" /> <b>Paper Image</b><br />
                        The different background images are separated by commas, and the images are stacked on top of each other, where the first image is closest to the viewer.
                        <p><b>Note : The background property is a shorthand property for:</b></p>
                        <ul>
                            <li>background-color</li>
                            <li>background-image</li>
                            <li>background-position</li>
                            <li>background-size</li>
                            <li>background-repeat</li>
                            <li>background-origin</li>
                            <li>background-clip</li>
                            <li>background-attachment</li>
                        </ul>
                    </Description>
                </Container>
            </Layout>
        </Fragment>
    );
}
