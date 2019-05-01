import React, { Fragment } from 'react';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import "./shadows.css";
import ShadowsImage from './assets/shadows.png';
import DisplayBox from '../../../../../../components/DisplayBox';

export default function Shadows() {
    return (
        <Fragment>
            <Layout type="column">
                <Container>
                    <Title>CSS Shadow Effects</Title>
                    <Description>
                        <Image image={ShadowsImage} />
                    </Description>
                </Container>
                <Container>
                    <Title>1. text-shadow</Title>
                    <Description>
                        The CSS text-shadow property applies shadow to text.
                        In its simplest use, you only specify the horizontal shadow (2px) and the vertical shadow (2px)
                        <br />
                        <b>Note : </b> "text-shadow : horizontal vertical opacity color";
                    </Description>
                    <DisplayBox>
                        <h1 className="textShadow1">Text-shadow effect!</h1>
                        <h1 className="textShadow2">Text-shadow effect!</h1>
                        <h1 className="textShadow3">Text-shadow effect!</h1>
                    </DisplayBox>
                </Container>
                <Container>
                    <Title>2. box-shadow</Title>
                    <Description>
                        The CSS box-shadow property applies shadow to elements.
                        <b>Note : </b> "box-shadow : horizontal vertical opacity color";
                    </Description>
                    <DisplayBox>
                        <div className="boxShadow1">This is a div element with a box-shadow</div>
                        <br />
                        <div className="boxShadow2">This is a div element with a box-shadow</div>
                    </DisplayBox>
                </Container>
            </Layout>
        </Fragment>
    );
}
