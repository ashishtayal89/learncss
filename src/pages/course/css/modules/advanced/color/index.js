import React, { Fragment } from 'react';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import "./color.css";

export default function Color() {
    return (
        <Fragment>
            <Layout type="column">
                <Container>
                    <Title>CSS supports 140+ color names, HEX values, RGB values, RGBA values, HSL values, HSLA values, and opacity.</Title>
                    <Description>
                        Examples
                        <ul>
                            <li>
                                {`{background-color: rgba(255, 0, 0, 0.3);}`}
                            </li>
                            <li>
                                {`{background-color: hsla(120, 100%, 50%, 0.3);}`}
                            </li>
                            <li>
                                {`{background-color:rgb(255,0,0);opacity:0.6;}`}
                            </li>
                        </ul>
                    </Description>
                </Container>
            </Layout>
        </Fragment>
    );
}
