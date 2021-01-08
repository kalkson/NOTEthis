import React from 'react';
import propTypes from 'prop-types';
import StyledListHeadline from './ListHeadline.styled';
import { ReactComponent as PenSVG } from '../../../assets/vector/pen-icon.svg';
import { ReactComponent as DeleteSVG } from '../../../assets/vector/delete-icon.svg';

const ListHeadline = ({ children, className }) => (
  <StyledListHeadline className={className}>
    {children}
    <PenSVG className="pen-icon" title="zmień nazwę" />
    <DeleteSVG className="delete-icon" title="usuń" />
  </StyledListHeadline>
);

ListHeadline.propTypes = {
  children: propTypes.oneOfType([
    propTypes.shape(propTypes.node),
    propTypes.node,
  ]).isRequired,
  className: propTypes.string,
};

ListHeadline.defaultProps = {
  className: null,
};

export default ListHeadline;
