import React, { useState } from 'react';
import { Container, Input, EyeIcon, Wrapper, EyeIconNoSlash } from "./style";

const NoramlInput = ({
    placeholder, disabled, typePwd, size, type, eye, position, ...others
}) => {
    const [see, setSee] = useState(false);
    return (
        <Wrapper type={type}>
            <Container typePwd={typePwd}>
                <Input
                    autoComplete="off"
                    typePwd={typePwd}
                    position={position}
                    disabled={disabled ? true : false}
                    type={see ? "text" : "password"}
                    size={size}
                    {...others}
                    placeholder={placeholder}
                />
                {see ? <EyeIcon
                    typePwd={typePwd}
                    Size={size}
                    disabled={disabled ? true : false}
                    onClick={
                        !disabled ? function () {
                            setSee(!see);
                        } : undefined
                    }
                />
                    : <EyeIconNoSlash
                        typePwd={typePwd}
                        Size={size}
                        disabled={disabled ? true : false}
                        onClick={
                            !disabled ? function () {
                                setSee(!see);
                            } : undefined
                        }
                    />}
            </Container>
        </Wrapper>
    );
};

export default NoramlInput;
