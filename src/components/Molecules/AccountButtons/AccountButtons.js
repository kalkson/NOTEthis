import React from 'react';
// import propTypes from 'prop-types';
import LinkButton from 'components/Atoms/LinkButton/LinkButton';
import StyledAccountButtons from './AccountButtons.styled';

const AccountButtons = () => (
  <StyledAccountButtons>
    <LinkButton>log in</LinkButton>
    <LinkButton border>sign in</LinkButton>
  </StyledAccountButtons>
);

// AccountButtons.propTypes = {
//   children: propTypes.oneOfType([
//     propTypes.arrayOf(propTypes.node),
//     propTypes.node,
//   ]).isRequired,
// };

export default AccountButtons;
