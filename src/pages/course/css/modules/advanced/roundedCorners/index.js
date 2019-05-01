import React, { Fragment } from 'react';
import DisplayBox from '../../../../../../components/DisplayBox';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import "./roundedCorners.css";
import variants from './assets/borderRadiusVariants.png'

export default function RoundedCorners() {
    return (
        <Fragment>
            <Layout type="column">
                <Container>
                    <Title>1. border-radius</Title>
                    <DisplayBox><div id="rcorners1"></div></DisplayBox>
                    <DisplayBox><div id="rcorners2"></div></DisplayBox>
                    <Description>    border-radius: 50px / 15px  --> 50px horizontal and 15px vertical</Description>
                    <Image image={variants} alt="variants"></Image>
                </Container>
            </Layout>
        </Fragment>
    );
}
