import React from 'react';
import TabList from '../../../../../../components/TabList';
import Tab from '../../../../../../components/Tab';
import ParentElements from './ParentElements';
import ItemElements from './ItemElements';
import Examples from './Examples';
import "./flexbox.css";


export default function FlexBox() {
    let tabs = (
        <TabList>
            <Tab title={"Parent Element"}>
                <ParentElements />
            </Tab>
            <Tab title={"Child Element"}>
                <ItemElements />
            </Tab>
            <Tab title={"Examples"}>
                <Examples />
            </Tab>
        </TabList>);
    return tabs;
}
