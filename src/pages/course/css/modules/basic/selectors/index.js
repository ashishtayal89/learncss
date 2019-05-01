import React from 'react';
import TabList from '../../../../../../components/TabList';
import Tab from '../../../../../../components/Tab';
import "./selectors.css";
import Selector from './Selectors';
import Combinators from './Combinators';
import PseudoEleAndClass from './PseudoEleAndClass';
import Specificity from './Specificity';



export default function Selectors() {
    let tabs = (
        <TabList>
            <Tab title={"Selectors"}>
                <Selector />
            </Tab>
            <Tab title={"Combinators"}>
                <Combinators />
            </Tab>
            <Tab title={"Pseudo Class/Pseudo Element"}>
                <PseudoEleAndClass />
            </Tab>
            <Tab title={"Specificity"}>
                <Specificity />
            </Tab>
        </TabList>);
    return tabs;
}
