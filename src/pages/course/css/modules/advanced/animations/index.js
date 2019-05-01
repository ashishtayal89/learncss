import React from 'react';
import TabList from '../../../../../../components/TabList';
import Tab from '../../../../../../components/Tab';
import Image from '../../../../../../components/Image';
import Examples from './examples';
import AnimationImage from './assets/animations.png';
import "./animations.css";


export default function Animations() {
    let tabs = (
        <TabList>
            <Tab title={"Intro"}>
                <Image image={AnimationImage} />
            </Tab>
            <Tab title={"Examples"} >
                <Examples />
            </Tab>
        </TabList>);
    return tabs;
}
