import React, { Fragment } from 'react';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import "./gradients.css";
import DisplayBox from '../../../../../../components/DisplayBox';

export default function Gradients() {
    return (
        <Fragment>
            <Layout type="column">
                <Container>
                    <Title>Gradients</Title>
                    <Description>
                        <p></p>
                        <ul>
                            <li>Linear Gradients (goes down/up/left/right/diagonally)</li>
                            <li>Radial Gradients (defined by their center)</li>
                        </ul>
                    </Description>
                </Container>
                <Container>
                    <Title>Linear Gradients</Title>
                    <Description>
                        Syntax
                        <ul>
                            <li>
                                background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
                            </li>
                            <li>
                                background-image: linear-gradient(angle, color-stop1, color-stop2);
                            </li>
                        </ul>
                    </Description>
                    <Description>
                        <ul>
                            <li>
                                CSS gradients also support transparency, which can be used to create fading effects.
                                <br />
                                Eg : background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
                            </li>
                            <li>
                                The repeating-linear-gradient() function is used to repeat linear gradients:
                                <br />
                                Eg -> background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
                            </li>
                        </ul>
                    </Description>
                    <DisplayBox>
                        <div className="linGradient"></div>
                    </DisplayBox>
                </Container>
                <Container>
                    <Title>Radical Gradients</Title>
                    <Description>
                        A radial gradient is defined by its center.
                        <ul>
                            <li>
                                background-image: radial-gradient(shape size at position, start-color, ..., last-color);
                            </li>
                            <li>
                                background-image: linear-gradient(angle, color-stop1, color-stop2);
                            </li>
                        </ul>
                    </Description>
                    <Description>
                        <ul>
                            <li>
                                By default, shape is ellipse, size is farthest-corner, and position is center.
                                <br />
                                Eg : background-image: radial-gradient(red, yellow, green);
                            </li>
                            <li>
                                The repeating-radial-gradient() function is used to repeat radial gradients:
                                <br />
                                Eg -> background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
                            </li>
                        </ul>
                    </Description>
                    <DisplayBox>
                        <div className="radGradient"></div>
                    </DisplayBox>
                </Container>
            </Layout>
        </Fragment>
    );
}
