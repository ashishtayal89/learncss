import React from 'react';
import DisplayBox from '../../../../../../components/DisplayBox';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import ContainerImage from './assets/Container.png';

export default function ParentElements() {
    return (
        <Layout type="column">
            <Container>
                <Title>1. Container Properties</Title>
                <Description>
                    <Image image={ContainerImage} />
                </Description>
                <Description>
                    <ul>
                        <li>
                            flex-direction --> row,column etc
                        </li>
                        <li>
                            flex-wrap --> wrap the content of the row into the next line if it overflows <b>flex-wrap : wrap</b>
                        </li>
                        <li>
                            flex-flow --> flex-direction + flex-wrap  Eg : <b>flex-flow : row wrap</b>
                        </li>
                        <li>
                            justify-content --> center (keep the content to the center in which ever direction you have chosen)
                        </li>
                        <li>
                            align-items --> opp of justify-content ie if justify-content works horizontally align-items would work vertically and vice versa
                        </li>
                        <li>
                            align-content --> The align-content property is used to align the flex lines.
                        </li>
                    </ul>
                </Description>
                <Description><b>Note : align-content is used when we have multiple flex lines. It provides styling to the flex line. Therefore if we use align-content then align-item is not of much significance. For instance in the below example we have 2 flex lines one and the top and the other at the bottom.</b></Description>
                <DisplayBox>
                    <div class="flex-container">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                        <div>12</div>
                    </div>
                </DisplayBox>
            </Container>
            <Container>
                <Title>2. center align an element</Title>
                <DisplayBox>
                    <div class="flex-container2">
                        <div>1</div>
                    </div>
                </DisplayBox>
            </Container>
        </Layout>
    )
}
