import React, { Fragment } from 'react';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import "./selectors.css";
import Highlight from '../../../../../../components/Highlight';
import Note from '../../../../../../components/Note';
import Title from '../../../../../../components/Title';



export default function Specificity() {
    return (
        <Fragment>
            <Container>
                <Title>1. Intro</Title>
                <Description>
                    <Highlight>If there are two or more conflicting CSS rules that point to the same element, the browser follows some rules to determine which one is most specific and therefore wins out.</Highlight>
                    <div>Think of specificity as a score/rank that determines which style declarations are ultimately applied to an element.</div>
                    <div>The universal selector (*) has low specificity, while ID selectors are highly specific! </div>
                </Description>
            </Container>
            <Container>
                <Title>2. Hierarchy</Title>
                <Description>
                    <div>Every selector has its place in the specificity hierarchy. There are four categories which define the specificity level of a selector:</div>
                    <ul>
                        <li>
                            <b>Inline styles</b> - An inline style is attached directly to the element to be styled.
                        </li>
                        <li>
                            <b>IDs</b> - An ID is a unique identifier for the page elements, such as #navbar.
                        </li>
                        <li>
                            <b>Classes, attributes and pseudo-classes</b> - This category includes .classes, [attributes] and pseudo-classes such as :hover, :focus etc.
                        </li>
                        <li>
                            <b>Elements and pseudo-elements</b> - This category includes element names and pseudo-elements, such as h1, div, ::before and ::after.
                        </li>
                    </ul>
                </Description>
            </Container>
            <Container>
                <Title>3. Calculate Specificity</Title>
                <Description>
                    Start at 0, add 1000 for style attribute, add 100 for each ID, add 10 for each attribute, class or pseudo-class, add 1 for each element name or pseudo-element.
                </Description>
                <Note>If the same rule is written twice into the external style sheet, then the lower rule in the style sheet is closer to the element to be styled, and therefore will be applied</Note>
                <Note>The embedded style sheet is closer to the element to be styled</Note>
                <Note> Universal selector (*), combinators (+, >, ~, ' ', ||) and negation pseudo-class (:not()) have no effect on specificity. (The selectors declared inside :not() do, however.)</Note>
                <Note>When an important rule is used on a style declaration, this declaration overrides any other declarations.</Note>
            </Container>
        </Fragment>

    )
}
