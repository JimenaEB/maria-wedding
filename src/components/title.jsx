import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as Consts from '../consts' 

const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${Consts.lightColor};
`;

const Title = props => {
    return <StyledTitle>{props.text}</StyledTitle>
}

Title.propTypes = {
    text: PropTypes.string.isRequired
};

export default Title;