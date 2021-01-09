import React from 'react';
import StyledAvatar from './Avatar.styled';
import { ReactComponent as AvatarSVG } from '../../../assets/vector/avatar-icon.svg';

const Avatar = () => (
  <StyledAvatar className="avatar">
    <div className="avatar__button">Zmień avatar</div>
    <AvatarSVG className="avatar__icon" />
  </StyledAvatar>
);

export default Avatar;
