import React from 'react';
import DisplayBox from '../../../../../../components/DisplayBox';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Container from '../../../../../../components/Container';
import "./examples.css";

export default function twoD() {
    return (
        <Layout type="column">
            <Container>
                <Title>Examples</Title>
                <DisplayBox>
                    <div class="smallCircle">
                    </div>
                </DisplayBox>
                <DisplayBox>
                    <div class="smallCircle1">
                    </div>
                </DisplayBox>
                <DisplayBox>
                    <div class="smallCircle2">
                    </div>
                </DisplayBox>
            </Container>
        </Layout>
    )
}
