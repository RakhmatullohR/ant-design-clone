import React, { useState } from "react";
import { Input, Label, Span, TextLeft, Wrapper, TextRight } from "./style";

export default ({
    id,
    textOn,
    textOff,
    size,
    bgChecked,
    bgNotChecked,
}) => {
    const [state, setState] = useState(false);
    const toggleSwitch = () => {
        return setState(!state);
    };
    return (
        <Wrapper>
            <Input
                bgChecked={bgChecked}
                size={size}
                id={id}
                type="checkbox"
            />
            <Label
                bgNotChecked={bgNotChecked}
                size={size}
                htmlFor={id}
                onClick={toggleSwitch}
            >
                <TextLeft
                    id={id}
                    size={size}
                    on={state ? "true" : "false"}
                    textOn={ textOn}
                >
                    {textOn}
                </TextLeft>
                <Span size={size} />
                <TextRight
                    id={id}
                    size={size}
                    right
                    off={state}
                    textOff={ textOff}
                >
                    {textOff}
                </TextRight>
            </Label>
        </Wrapper>
    );
};
