import React, { Fragment } from 'react';
import DisplayBox from '../../../../../../components/DisplayBox';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import "./borderimages.css";
import variants from './assets/borderImage.png'

export default function BorderImages() {
    return (
        <Fragment>
            <Layout type="column">
                <Container>
                    <Title>1. border-image</Title>
                    <DisplayBox><div id="borderimg1"></div><br/><div id="borderimg2"></div></DisplayBox>
                    <Description>The property has three parts: <br/>
                                    1. The image to use as the border <br/>
                                    2 .Where to slice the image <br/>
                                    3. Define whether the middle sections should be repeated or stretched <br/>
                                    The border-image property takes the image and slices it into nine sections, like a <b>tic-tac-toe</b> board. It then places the corners at the corners, and the middle sections are repeated or stretched as you specify.<br/>
                                    <b>border-image: url(./assets/borderImage.png) 40 stretch;</b> --> slices the image 40% to right from left corner, 40% to left from right corner and similarly from top and bottom
                                    </Description>
                    <Description> <Image image={variants} alt="variants" /> <b>Actual Image</b></Description>

                </Container>
            </Layout>
        </Fragment>
    );
}
