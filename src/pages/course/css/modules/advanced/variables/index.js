import React, { Fragment } from 'react';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import "./variables.css";
import VariableImage from './assets/variables.png';

export default function Variables() {
    return (
        <Fragment>
            <Layout type="column">
                <Container>
                    <Title>CSS Custom Properties (Variables)</Title>
                    <Description>
                        <div>
                            <b>
                                The var() function can be used to insert the value of a custom property.
                            </b>
                        </div>
                        <Image image={VariableImage} />
                    </Description>
                </Container>
            </Layout>
        </Fragment>
    );
}
