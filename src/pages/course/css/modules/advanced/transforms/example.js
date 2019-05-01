import React from 'react';
import DisplayBox from '../../../../../../components/DisplayBox';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Container from '../../../../../../components/Container';

export default function twoD() {
    return (
        <Layout type="column">
            <Container>
                <Title>Examples</Title>
                <DisplayBox>
                    <div id="square">
                    </div>
                </DisplayBox>
                <DisplayBox>
                    <div id="roller">
                    </div>
                </DisplayBox>
                <DisplayBox>
                    <div id="rotate">
                    </div>
                </DisplayBox>
            </Container>
        </Layout>
    )
}
