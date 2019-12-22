import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors, avenir } from "styles/css-variables";

const StyledTab = styled.div`
  margin-right: 16px;
  cursor: pointer;
  padding: 24px;
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: ${avenir};
  color: ${colors.white};
  border-radius: 4px;

  ${({ isActive }) =>
    !isActive &&
    `
  &:hover {
    background: #575d5f;;
  }
	`};

  ${({ isActive }) =>
    isActive &&
    `
			color: ${colors.black};
			background: ${colors.white};
			box-shadow: 0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)
		`};
`;

const Tab = ({ children, name, onClick, isActive, ...props }) => {
  const renderChildren = () => {
    return React.cloneElement(children, { isActive });
  };

  return (
    <StyledTab onClick={() => onClick(name)} isActive={isActive} {...props}>
      {renderChildren()}
    </StyledTab>
  );
};

Tab.propTypes = {
  children: PropTypes.element.isRequired, //title or display name of the tab
  name: PropTypes.string.isRequired, //name to associate with the associated tab pane
  onClick: PropTypes.func, //callback for clicking on the tab
  isActive: PropTypes.bool //handles styling for the active and inactive tabs
};

export default Tab;
