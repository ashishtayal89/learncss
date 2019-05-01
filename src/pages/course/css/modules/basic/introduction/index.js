import React, { Fragment } from 'react';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import "./introduction.css";
import SelectorsImage from './assets/Selectors.png';
import BoxModelImage from './assets/BoxModel.png';

export default function Introduction() {
    return (
        <Fragment>
            <Layout type="column">
                <Container>
                    <Title>1. Introduction</Title>
                    <Description>
                        <ul>
                            <li>CSS stands for Cascading Style Sheets</li>
                            <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
                        </ul>
                    </Description>
                    <Description>
                        <ol>
                            <li>
                                <b>Types to insert a stylesheet:</b>
                                <ul>
                                    <li>Inline</li>
                                    <li>Internal</li>
                                    <li>External</li>
                                </ul>
                            </li>
                            <li>
                                <b>All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:</b>
                                <ol>
                                    <li>Inline style (inside an HTML element)</li>
                                    <li>Internal style sheets</li>
                                    <li>External style sheets</li>
                                    <li>Browser default</li>
                                </ol>
                            </li>
                        </ol>
                    </Description>
                </Container>
                <Container>
                    <Title>1. Syntax and Box Model</Title>
                    <Description>
                        <ol>
                            <li>
                                <b>Syntax</b>
                                <ul>
                                    <li>
                                        A CSS rule-set consists of a selector and a declaration block
                                    </li>
                                    <li>
                                        The selector points to the HTML element you want to style. CSS selectors are used to "find" (or select) HTML elements based on their element name, id, class, attribute, and more
                                    </li>
                                    <li>
                                        The declaration block contains one or more declarations separated by semicolons.
                                    </li>
                                </ul>
                                <Image image={SelectorsImage} />
                            </li>
                            <li>
                                <b>Box Model</b>
                                <p>All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.<b>The CSS box model is essentially a box that wraps around every HTML element.</b> It consists of: margins, borders, padding, and the actual content. </p>
                                <Image image={BoxModelImage} />
                            </li>
                        </ol>
                    </Description>
                </Container>
            </Layout>
        </Fragment>
    );
}
