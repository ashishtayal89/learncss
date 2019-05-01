import React, { Fragment } from 'react';
import TabList from '../../../../../../components/TabList';
import Tab from '../../../../../../components/Tab';
import TwoD from './twoD';
import ThreeD from './threeD'
import Example from './example';
import "./transforms.css";

export default function Transforms() {
    let tabs = (
        <TabList>
            <Tab title={"2D"}>
                <TwoD />
            </Tab>
            <Tab title={"3D"}>
                <ThreeD />
            </Tab>
            <Tab title={"Example"}>
                <Example />
            </Tab>
        </TabList>);
    return tabs;
}
