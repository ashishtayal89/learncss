import React from 'react';
import TabList from '../../../../../../components/TabList';
import Tab from '../../../../../../components/Tab';
import Image from '../../../../../../components/Image';
import BorderImage from './assets/Border.png';
import PaddingImage from './assets/Padding.png';
import MarginImage from './assets/Margin.png';
import ContentImage from './assets/Content.png';
import BoxModelImage from './assets/BoxModel.png';
import "./boxModel.css";
import Description from '../../../../../../components/Description';



export default function BoxModel() {
    let tabs = (
        <TabList>
            <Tab title={"Intro"}>
                <Image image={BoxModelImage} />
                <Description>
                    <ul>
                        <b>Explanation of the different parts:</b>
                        <li><b>Content</b> - The content of the box, where text and images appear</li>
                        <li><b>Padding</b> - Clears an area around the content. The padding is transparent</li>
                        <li><b>Border</b> - A border that goes around the padding and content</li>
                        <li><b>Margin</b> - Clears an area outside the border. The margin is transparent</li>
                    </ul>
                    <ol>
                        <li><b>Calculate Width</b> - width + left padding + right padding + left border + right border + left margin + right margin</li>
                        <li><b>Calculate Height</b> - height + top padding + bottom padding + top border + bottom border + top margin + bottom margin</li>
                    </ol>
                </Description>
            </Tab>
            <Tab title={"Margin"} >
                <p>The CSS margin properties are used to create space around elements, outside of any defined borders.</p>
                <Image image={MarginImage} />
            </Tab>
            <Tab title={"Border"} >
                <p>The CSS border properties allow you to specify the style, width, and color of an element's border.</p>
                <Image image={BorderImage} />
            </Tab>
            <Tab title={"Padding"} >
                <p>The CSS padding properties are used to generate space around an element's content, inside of any defined borders.</p>
                <Image image={PaddingImage} />
            </Tab>
            <Tab title={"Content"} >
                <p>The height and width properties are used to set the height and width of an element.</p>
                <Image image={ContentImage} />
            </Tab>
        </TabList>);
    return tabs;
}
