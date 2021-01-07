import styled from 'styled-components';

const StyledAvatar = styled.div`
  border: solid 5px ${({ theme }) => theme.colors.background};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 130px;
  height: 130px;
  border-radius: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  right: 10%;
  top: -70px;

  .avatar {
    &__icon {
      width: 70px;
      height: 70px;
    }

    &__button {
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 85px;
      background-color: rgba(255, 255, 255, 0.7);
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: opacity 0.1s linear;
    }

    &__button:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

export default StyledAvatar;
