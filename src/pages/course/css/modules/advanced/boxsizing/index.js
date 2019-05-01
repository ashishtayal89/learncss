import React, { Fragment } from 'react';
import DisplayBox from '../../../../../../components/DisplayBox';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import "./boxsizing.css";


export default function BoxSizing() {
    return (
        <Fragment>
            <Layout type="column">
                <Description>
                    The <b>box-sizing</b> property allows us to include the padding and border in an element's total width and height.
                </Description>
                <Container>
                    <Title>1. Without box sizing</Title>
                    <DisplayBox>
                        <div id="withoutBoxSize1">This div is smaller (width is 300px and height is 100px).</div><br />
                        <div id="withoutBoxSize2">This div is smaller (width is 300px and height is 100px).</div>
                    </DisplayBox>
                </Container>
                <Container>
                    <Title>2. With box sizing</Title>
                    <DisplayBox>
                        <div id="withBoxSize1">This div is smaller (width is 300px and height is 100px).</div><br />
                        <div id="withBoxSize2">This div is smaller (width is 300px and height is 100px).</div>
                    </DisplayBox>
                </Container>
                <Description>
                    Since the result of using the box-sizing: border-box; is so much better, many developers want all elements on their pages to work this way.<br />
                    The code below ensures that all elements are sized in this more intuitive way. Many browsers already use box-sizing: border-box; for many form elements (but not all - which is why inputs and text areas look different at width: 100%;).
                    <br /><b>{`* {box-sizing: border-box;}`}</b>
                </Description>
            </Layout>
        </Fragment>
    );
}
