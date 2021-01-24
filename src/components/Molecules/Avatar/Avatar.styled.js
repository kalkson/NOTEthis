import styled from 'styled-components';

const StyledAvatar = styled.div`
  border: solid 5px ${({ theme }) => theme.colors.background};
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  right: 5%;
  top: 20px;

  background: ${({ theme, url }) =>
    url
      ? `${theme.colors.primary} url(${url}) no-repeat center/cover;`
      : theme.colors.primary};

  @media (min-width: 1024px) {
    width: 130px;
    height: 130px;
    right: 10%;
    top: -70px;

    .avatar {
      &__icon {
        width: 70px;
        height: 70px;
      }
    }
  }

  .avatar {
    &__icon {
      width: 50px;
      height: 50px;
    }

    &__button {
      &:hover,
      &:focus {
        outline: none;
        border: none;
      }

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
      text-align: center;
    }

    &__button:hover {
      opacity: 1;
      cursor: pointer;
    }

    &__dispatchButton {
      visibility: hidden;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 200px;
      z-index: 5;
    }
  }
`;

export default StyledAvatar;
