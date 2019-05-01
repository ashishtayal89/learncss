import React, { Fragment } from 'react';
import DisplayBox from '../../../../../../components/DisplayBox';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import "./userInterface.css";

export default function UserInterface() {
    return (
        <Fragment>
            <Layout type="column">
                <Container>
                    <Description>
                        <b>There are 2 main user interface properties :</b>
                        <ul>
                            <li>
                                resize
                            </li>
                            <li>
                                outline-offset
                            </li>
                        </ul>
                    </Description>
                </Container>
                <Container>
                    <Title>1. resize</Title>
                    <DisplayBox>
                        <div className="resize">
                            <p>Let the user resize only the width of this div element.</p>
                            <p>To resize: Click and drag the bottom right corner of this div element.</p>
                        </div>
                    </DisplayBox>
                    <Description>
                        <span>The resize property specifies if (and how) an element should be resizable by the user. This div element is resizable by the                 user!To resize: Click and drag the bottom right corner of this div element.
                        </span>
                        <b> Note: Internet Explorer does not support the resize property.</b>
                    </Description>
                </Container>
                <Container>
                    <Title>2. outline-offset</Title>
                    <DisplayBox>
                        <div class="outline1">This div has a 4 pixels solid red outline 15 pixels outside the border edge.</div>
                        <br/>
                        <div class="outline2">This div has a 5 pixels dashed blue outline 5 pixels outside the border edge.</div>
                    </DisplayBox>
                    <Description>
                        <div>The outline-offset property adds space between an outline and the edge or border of an element.</div>
                        
                            <ul>Outlines differ from borders in three ways:
                                <li>An outline is a line drawn around elements, outside the border edge</li>
                                <li>An outline does not take up space</li>
                            </ul>
                    </Description>
                </Container>
            </Layout>
        </Fragment>
    );
}
