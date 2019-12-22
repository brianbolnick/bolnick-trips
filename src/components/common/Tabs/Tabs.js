import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TabPane from "./TabPane";
import Tab from "./Tab";

const Container = styled.div`
  height: 100%;
`;

const Tabs = ({ defaultActiveTab, onTabChange, children, asyncRender }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = tabName => {
    onTabChange && onTabChange(tabName);
    setActiveTab(tabName);
  };

  const enrichTab = child => {
    //add onclick handler to tab
    return React.cloneElement(child, {
      onClick: handleTabClick,
      isActive: activeTab === child.props.name
    });
  };

  const enrichTabPane = child => {
    //add show/hide styling to tab pane and isActive prop
    return React.cloneElement(child, {
      isActive: activeTab === child.props.name
    });
  };

  const enrichChild = child => {
    if (child === null) return;

    if (child.props.children && Array.isArray(child.props.children)) {
      const newChild = React.cloneElement(child, {
        children: React.Children.map(child.props.children, subChild => {
          return enrichChild(subChild);
        })
      });
      return newChild;
    }

    if (child.type === Tab || child.type.displayName === "Tab") {
      return enrichTab(child);
    }

    if (child.type === TabPane || child.type.displayName === "TabPane") {
      return enrichTabPane(child);
    }
    return child;
  };

  const renderChildren = () => {
    return React.Children.map(children, child => {
      return enrichChild(child);
    });
  };

  return <Container>{renderChildren()}</Container>;
};

Tabs.propTypes = {
  children: PropTypes.any, //Should consist of Tab, TabPane components
  onTabChange: PropTypes.func, //Callback function for handling changing tabs
  defaultActiveTab: PropTypes.string.isRequired, //Tab to show on initial render
  asyncRender: PropTypes.bool //Whether or not to render all child tab panes by default. Default renders tab panes only as they become active.
};

Tabs.defaultProps = {
  asyncRender: false
};

export default Tabs;
