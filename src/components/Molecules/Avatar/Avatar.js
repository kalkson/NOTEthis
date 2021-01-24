import React, { useRef } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeAvatar } from 'components/store/Actions/actions';
import StyledAvatar from './Avatar.styled';
import { ReactComponent as AvatarSVG } from '../../../assets/vector/avatar-icon.svg';

const Avatar = ({ changeAvatarPhoto, userImage }) => {
  const input = useRef(null);

  const handleClick = () => {
    input.current.click();
  };

  const handleAdd = e => {
    changeAvatarPhoto(e.target.files[0]);
  };

  return (
    <StyledAvatar className="avatar" url={userImage}>
      <div
        role="button"
        className="avatar__button"
        onClick={e => handleClick(e)}
        onKeyDown={e => handleClick(e)}
        tabIndex={0}
      >
        Zmień avatar
      </div>
      {!userImage || userImage === '' ? (
        <AvatarSVG className="avatar__icon" />
      ) : null}
      <input
        type="file"
        ref={input}
        className="avatar__dispatchButton"
        onChange={e => handleAdd(e)}
      />
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  changeAvatarPhoto: propTypes.func.isRequired,
  userImage: propTypes.string,
};

Avatar.defaultProps = {
  userImage: null,
};

const mapDispatchToProps = dispatch => {
  return {
    changeAvatarPhoto: image => dispatch(changeAvatar(image)),
  };
};

export default connect(null, mapDispatchToProps)(Avatar);
