import React from 'react';
import DisplayBox from '../../../../../../components/DisplayBox';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import TwoDImage from './assets/2D.png';
import TwoDPropertiesImage from './assets/2DProperties.png';

export default function twoD() {
    return (
        <Layout type="column">
            <Container>
                <Title>1. CSS 2D Transforms</Title>
                <Description>
                    <Image image={TwoDImage} />
                    <Image image={TwoDPropertiesImage} />
                </Description>
                <Description>
                    <p>CSS transforms allow you to translate, rotate, scale, and skew elements. A transformation is an effect that lets an element change shape, size and position.</p>
                    <ul>
                        <li>
                            translate() --> The translate() method moves an element from its current position (according to the parameters given for the X-axis and the Y-axis).
                        </li>
                        <li>
                            rotate() --> The rotate() method rotates an element clockwise or counter-clockwise according to a given degree. +ve clockwise and -ve anti-clockwise.
                        </li>
                        <li>
                            scale() --> The scale() method increases or decreases the size of an element (according to the parameters given for the width and height).
                        </li>
                        <li>
                            skewX() --> The skewX() method skews an element along the X-axis by the given angle.
                        </li>
                        <li>
                            skewY() --> The skewY() method skews an element along the Y-axis by the given angle.
                        </li>
                        <li>
                            matrix() --> The matrix() method combines all the 2D transform methods into one. The matrix() method take six parameters, containing mathematic functions, which allows you to rotate, scale, move (translate), and skew elements. The parameters are as follow: matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
                        </li>
                    </ul>
                </Description>
                <DisplayBox>
                    <div className="normal">
                        This div element is moved 50 pixels to the right, and 100 pixels down from its current position.
                    </div>
                    <div className="normal translate">
                        This div element is moved 50 pixels to the right, and 100 pixels down from its current position.
                    </div>
                </DisplayBox>
            </Container>
        </Layout>
    )
}
