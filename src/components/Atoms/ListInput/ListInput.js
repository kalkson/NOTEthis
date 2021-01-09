import React, { useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
`;

const StyledInput = styled.input`
  font-size: 2.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-bottom: solid 2px ${({ theme }) => theme.colors.peimary};
  padding: 5px 10px;
  outline: none;
  font-weight: bold;
  width: 100%;
`;

const ListInput = ({ children, className, value, handleSubmit }) => {
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
        //   value={value}
        ref={input}
        onChange={e => setActualValue(e.target.value)}
      >
        {children}
      </StyledInput>
    </StyledForm>
  );
};

ListInput.displayName = 'ListInput';

ListInput.propTypes = {
  children: propTypes.oneOfType([
    propTypes.shape(propTypes.node),
    propTypes.node,
  ]).isRequired,
  className: propTypes.string,
  value: propTypes.string,
  handleSubmit: propTypes.func.isRequired,
};

ListInput.defaultProps = {
  className: null,
  value: '',
};

export default ListInput;
