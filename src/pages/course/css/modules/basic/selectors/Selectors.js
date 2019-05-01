import React from 'react';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import "./selectors.css";



export default function Selector() {
    return (
        <Container>
            <Description>
                <ul>
                    <li>
                        <b>Types</b>
                        <ol>
                            <li><b>Element Selector</b> - The element selector selects elements based on the element name. Eg <b>{`p { text-align: center; color: red;}`}</b></li>
                            <li><b>Id Selector</b> - The id selector selects id based on the element name. Eg <b>{`p#para { text-align: center; color: red;}`}</b></li>
                            <li><b>Class Selector</b> - The class selector selects class based on the element name. Eg <b>{`p.para { text-align: center; color: red;}`}</b></li>
                            <li><b>Attribute Selector</b> - The attribute selector selects attribute based on the element name. Eg <b>{`p[id="para"] { text-align: center; color: red;}`}</b></li>
                        </ol>
                    </li>
                    <li>
                        <p>
                            <b>Grouping Selectors : </b>
                            <br />
                            It is used to group the selectors with the same style definition.
                                    Eg : <b>{`h1, h2, p { text-align: center; color: red;}`}</b>
                        </p>
                    </li>
                </ul>
            </Description>
        </Container>
    )
}
