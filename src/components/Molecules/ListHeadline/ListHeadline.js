import React from 'react';
import propTypes from 'prop-types';
import StyledListHeadline from './ListHeadline.styled';
import { ReactComponent as PenSVG } from '../../../assets/vector/pen-icon.svg';
import { ReactComponent as DeleteSVG } from '../../../assets/vector/delete-icon.svg';

const ListHeadline = ({ children }) => (
  <StyledListHeadline>
    {children}
    <PenSVG />
    <DeleteSVG />
  </StyledListHeadline>
);

ListHeadline.propTypes = {
  children: propTypes.oneOfType([
    propTypes.shape(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default ListHeadline;
