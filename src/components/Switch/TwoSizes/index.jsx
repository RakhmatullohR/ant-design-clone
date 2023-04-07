import React from "react";
import { Input, Label, Span, Wrapper } from "./style";

export default ({ id, size, bgChecked, bgNotChecked }) => {
    return (
        <Wrapper>
            <Input bgChecked={bgChecked} id={id} type="checkbox" />
            <Label bgNotChecked={bgNotChecked} size={size} htmlFor={id}>
                <Span size={size} />
            </Label>
        </Wrapper>
    );
};
