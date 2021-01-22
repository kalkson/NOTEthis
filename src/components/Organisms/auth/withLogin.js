import React, { useState } from 'react';

const withLogin = Component => {
  const returnComponent = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e, type) => {
      e.preventDefault();

      switch (type) {
        case 'login': {
          console.log(email, password);
          break;
        }
        case 'register': {
          console.log(email, password);
          break;
        }
        default:
          break;
      }
    };

    return (
      <Component
        {...props}
        setPassword={setPassword}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
    );
  };

  returnComponent.displayName = 'withLoginHOC';
  return returnComponent;
};

export default withLogin;
