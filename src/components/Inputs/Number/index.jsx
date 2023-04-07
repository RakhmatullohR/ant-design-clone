import React from 'react';
import {
    Container, Input,
} from './style';

const PasswordInput = ({
    placeholder,
    disabled,
    size,
    typeNum,
    position,
    ...others
}) => (
        <Container>
            <Input
                position={position}
                type="number"
                typeNum={typeNum}
                disabled={disabled ? true : false}
                size={size}
                {...others}
                placeholder={placeholder}
            />
        </Container>
    );


export default PasswordInput;
