import React, { useState, useEffect } from 'react'
import {
    CheckboxContainer,
    HiddenCheckbox,
    Icon,
    StyledCheckbox, Span, Label
} from "./style";


const Checkbox = ({
    className,
    checked,
    bgColor,
    checkedBgColor,
    size,
    disabled,
    ...props
}) => (
        <CheckboxContainer className={className}>
            <HiddenCheckbox checked={checked ? true : false} {...props} readOnly />
            <StyledCheckbox
                checked={checked}
                size={size}
                checkedBgColor={checkedBgColor}
                bgColor={bgColor}
                disabled={disabled}
            >
                <Icon
                    checkedBgColor={checkedBgColor}
                    disabled={disabled}
                    viewBox="0 0 24 24"
                >
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
        </CheckboxContainer>
    );

export default ({
    size,
    checkedBgColor,
    bgColor,
    disabled,
    labelText,
    checked
}) => {
    const [state, setState] = useState(checked);
    useEffect(() => {
        setState(checked)
    }, [checked])
    const handleCheckboxChange = (event) => {
        !disabled &&
            setState(event.target.checked);
    }

    return (
        <div>
            <Label disabled={disabled}>
                <Checkbox
                    size={size}
                    disabled={disabled}
                    checked={state}
                    checkedBgColor={checkedBgColor}
                    bgColor={bgColor}
                    onChange={handleCheckboxChange}
                />
                {labelText && <Span size={size}>{labelText}</Span>}
            </Label>
        </div>
    );
};