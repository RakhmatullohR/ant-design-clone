import React, { useState } from "react";
import { Input, Label, Span, ToggleButton, Wrapper } from "./style";

export default ({ id, size, bgChecked, bgNotChecked }) => {
    const [state, setState] = useState(false);
    const toggleSwitch = () => {
        return setState(!state)
    };
    return (
        <Wrapper>
            <Input
                bgChecked={bgChecked}
                disabled={state}
                id={id}
                type="checkbox"
            />
            <Label
                bgNotChecked={bgNotChecked}
                size={size}
                disabled={state}
                htmlFor={id}
            >
                <Span size={size} />
            </Label>
            <ToggleButton onClick={toggleSwitch}>disabled</ToggleButton>
        </Wrapper>
    );
};
