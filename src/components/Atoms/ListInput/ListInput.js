import React, { useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form``;

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-bottom: solid 2px ${({ theme }) => theme.colors.primary};
  outline: none;
  width: 100%;

  ${({ type }) =>
    type === 'headline'
      ? `
      font-size: 2.5rem;
      padding: 5px 10px;
      font-weight: bold;
      width: 100%;
      position: relative;
       `
      : `
        font-size: 1.9rem;
        padding: 1px 5px;
        margin: 1px 0;

      `}
`;

const ListInput = ({ children, className, value, handleSubmit, type }) => {
  const [actualValue, setActualValue] = useState(null);
  const input = useRef(null);

  useEffect(() => {
    input.current.value = value;
    input.current.select();
    console.log(value);
  }, []);

  return (
    <StyledForm onSubmit={e => handleSubmit(e, actualValue)}>
      <StyledInput
        className={className}
        ref={input}
        onChange={e => setActualValue(e.target.value)}
        type={type}
        placeholder="dodaj nowy element"
      >
        {children}
      </StyledInput>
    </StyledForm>
  );
};

ListInput.displayName = 'ListInput';

ListInput.propTypes = {
  children: propTypes.oneOfType([propTypes.shape(propTypes.node), propTypes.node]).isRequired,
  className: propTypes.string,
  value: propTypes.string,
  handleSubmit: propTypes.func.isRequired,
  type: propTypes.string.isRequired,
};

ListInput.defaultProps = {
  className: null,
  value: '',
};

export default ListInput;
