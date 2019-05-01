import React, { Fragment } from 'react';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import "./selectors.css";
import Highlight from '../../../../../../components/Highlight';
import Title from '../../../../../../components/Title';
import Image from '../../../../../../components/Image';
import PseudoClassTypesImage from './assets/PseudoClassTypes.png';
import PseudoElementTypesImage from './assets/PseudoElementTypes.png';
import PseudoElementNotesImage from './assets/PseudoElementNote.png';



export default function PseudoEleAndClass() {
    return (
        <Fragment>
            <Container>
                <Title>1. Pseudo Element</Title>
                <Description>
                    <Highlight>A CSS pseudo-element is used to style specified parts of an element.</Highlight>
                    <ul>
                        <b>For example, it can be used to:</b>
                        <li>Style the first letter, or line, of an element</li>
                        <li>Insert content before, or after, the content of an element</li>
                    </ul>
                    <Image image={PseudoElementNotesImage} />
                    <Image image={PseudoElementTypesImage} />
                </Description>
            </Container>
            <Container>
                <Title>1. Pseudo Class</Title>
                <Description>
                    <Highlight>A pseudo-class is used to define a special state of an element.</Highlight>
                    <ul>
                        <b>For example, it can be used to:</b>
                        <li>Style an element when a user mouses over it</li>
                        <li>Style visited and unvisited links differently</li>
                    </ul>
                    <Image image={PseudoClassTypesImage} />
                </Description>
            </Container>
        </Fragment>
    )
}
