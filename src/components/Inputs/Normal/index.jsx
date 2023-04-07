import React from 'react';
import {
  Container, Input
} from './style';

const NoramlInput = ({
  placeholder, disabled, size, bgColor, type, ...others
}) => (
    <Container>
      <Input bgColor={bgColor} type={type} disabled={disabled ? true : false} size={size} {...others} placeholder={placeholder} />
    </Container>
  );

export default NoramlInput;
