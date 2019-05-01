import React from 'react';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import "./selectors.css";
import Highlight from '../../../../../../components/Highlight';



export default function Combinators() {
    return (
        <Container>
            <Description>
                <Highlight>A combinator is something that explains the relationship between the selectors.</Highlight>
                <ul>
                    <li>
                        <b>Descendant selector (space) : </b>
                        <br />
                        The descendant selector matches all elements that are descendants of a specified element.
                                <br />
                        Eg : <b>{`div p {background-color: yellow;}`}</b> will select all p tags inside a div.
                            </li>
                    <li>
                        <b>Child selector (>)</b>
                        <br />
                        The child selector selects all elements that are the immediate children of a specified element.
                                <br />
                        Eg : <b>{`div > p {background-color: yellow;}`}</b> will select all p tags immediately inside a div.
                            </li>
                    <li>
                        <b>Adjacent sibling selector (+)</b>
                        <br />
                        The adjacent sibling selector selects all elements that are the adjacent siblings of a specified element.

                                <br />
                        Eg : <b>{`div + p {background-color: yellow;}`}</b> will select all p tags that are adjacent sibling to a div.
                                <Highlight>Note : Sibling elements must have the same parent element, and "adjacent" means "immediately following".</Highlight>
                    </li>
                    <li>
                        <b>General sibling selector (~)</b>
                        <br />
                        The general sibling selector selects all elements that are siblings of a specified element.

                                <br />
                        Eg : <b>{`div ~ p {background-color: yellow;}`}</b> will select all p tags that are sibling to a div.
                                <br />
                        <Highlight>Note : Sibling elements must have the same parent element and must be after the specified element</Highlight>
                    </li>
                </ul>
            </Description>
        </Container>
    )
}
