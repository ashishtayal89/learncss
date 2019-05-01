import React from 'react';
import Layout from '../../../../../../components/Layout';
import Image from '../../../../../../components/Image';
import TransitionImage from './assets/transition.png';
import "./transition.css";
import Container from '../../../../../../components/Container';
import Title from '../../../../../../components/Title';
import Description from '../../../../../../components/Description';
import DisplayBox from '../../../../../../components/DisplayBox';


export default function Transition() {
    return (
        <Layout type="column">
            <Container>
                <Title>CSS Transitions</Title>
                <Description>
                    CSS transitions allows you to change property values smoothly (from one value to another), over a given duration.
                    To create a transition effect, you must specify two things:
                    <ul>
                        <li>the CSS property you want to add an effect to</li>
                        <li>the duration of the effect</li>
                    </ul>
                    <div><b>Note:</b> If the duration part is not specified, the transition will have no effect, because the default value is 0.</div>
                </Description>
                <DisplayBox>
                    <div className="transition"></div>
                </DisplayBox>
                <Image image={TransitionImage} />
            </Container>
        </Layout>
    )
}
