import React, { memo, Children, useState } from 'react';
import Layout from './Layout';
import Tab from './Tab';
import "./tabList.css";

export default memo(function TabList({ children }) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    let finalTabs = Children.map(children, (element, index) => {
        if (!React.isValidElement(element)) {
            console.error(`Not a valid react element ${element}`);
            return null;
        }
        const active = activeTabIndex === index;
        return typeof element.type !== "string" ?
            React.cloneElement(element, { id: index, active }) : <Tab id={index} active={active}>{element}</Tab>;
    })
    let tabPannel = Children.map(children, (element, index) => {
        if (!React.isValidElement(element)) {
            console.error(`Not a valid react element ${element}`);
            return null;
        }
        const { title } = element.props;
        const active = activeTabIndex === index ? "active" : "";
        return (<span className={`tabPannel ${active}`} onClick={()=>{setActiveTabIndex(index)}}>{title ? title : `Tab${index+1}`}</span>);
    })
    return (
        <div className="tabList">
            <Layout type="column">
                <div className="tabPannelContainer">{tabPannel}</div>
                <div className="tabs">{finalTabs}</div>
            </Layout>
        </div>
    );
});

