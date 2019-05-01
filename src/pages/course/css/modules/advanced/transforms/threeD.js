import React from 'react';
import DisplayBox from '../../../../../../components/DisplayBox';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import ThreeDImage from './assets/3D.png';
import ThreeDPropertiesImage from './assets/3DProperties.png';

export default function threeD() {
    return (
        <Layout type="column">
            <Container>
                <Title>1. CSS 3D Transforms</Title>
                <Description>
                    <Image image={ThreeDImage} />
                    <Image image={ThreeDPropertiesImage} />
                </Description>
                <Description>
                    <ul>
                        <li>
                            rotateX() --> The rotateX() method rotates an element around its X-axis at a given degree. +ve clockwise and -ve anti-clockwise.
                        </li>
                        <li>
                            rotateY() --> The rotateY() method rotates an element around its Y-axis at a given degree. +ve clockwise and -ve anti-clockwise.
                        </li>
                        <li>
                            rotateZ() --> The rotateZ() method rotates an element around its Z-axis at a given degree. +ve clockwise and -ve anti-clockwise.
                        </li>
                    </ul>
                </Description>
                <DisplayBox>
                    <div class="normal">
                        This a normal div element.
                    </div>

                    <div class="normal rotateX">
                        This div element is rotated 150 degrees.
                    </div>
                </DisplayBox>
            </Container>
        </Layout>
    )
}
