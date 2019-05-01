import React from 'react';
import DisplayBox from '../../../../../../components/DisplayBox';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import ItemsImage from './assets/Items.png';

export default function ItemElements() {
    return (
        <Layout type="column">
            <Container>
                <Title>1. Item Properties</Title>
                <Description>
                    <Image image={ItemsImage} />
                </Description>
                <Description>
                    <ul>
                        <li>
                            order --> provides the order of the items.
                        </li>
                        <li>
                            flex-grow --> The flex-grow property specifies how much a flex item will grow relative to the rest of the flex items. Default 0
                        </li>
                        <li>
                            flex-shrink --> The flex-shrink property specifies how much a flex item will shrink relative to the rest of the flex items. Default 1
                        </li>
                        <li>
                            flex-basic --> The flex-basis property specifies the initial length of a flex item.
                        </li>
                        <li>
                            flex --> The flex property is a shorthand property for the flex-grow, flex-shrink, and flex-basis properties.
                        </li>
                        <li>
                            align-self --> The align-self property specifies the alignment for the selected item inside the flexible container.The align-self property overrides the default alignment set by the container's align-items property.
                        </li>
                    </ul>
                </Description>
            </Container>
        </Layout>
    )
}
