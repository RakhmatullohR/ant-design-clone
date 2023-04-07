import React from "react";
import {
    Container,
    Input,
    IconContainerLeft,
    IconContainerRight,
} from "./style";

const NoramlInput = ({
    placeholder,
    disabled,
    size,
    Icon,
    type,
    position,
    ...others
}) => (
        <Container type={type} disabled={disabled ? true : false}>
            {position === "left" && <IconContainerLeft
                size={size}
                disabled={disabled ? true : false}
                position={position || 'right'}
                type={type}
                id="plus-input-icon-left"
            >
                <Icon />
            </IconContainerLeft>}
            <Input
                position={position || 'right'}
                type={type}
                disabled={disabled ? true : false}
                size={size}
                {...others}
                placeholder={placeholder}
            />
            {position === "right" && <IconContainerRight
                size={size}
                disabled={disabled ? true : false}
                position={position || 'right'}
                type={type}
                id="plus-input-icon-right"
            >
                <Icon />
            </IconContainerRight>}
        </Container>
    );

export default NoramlInput;
