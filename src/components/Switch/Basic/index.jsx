import React from "react";
import { Input, Label, Span, Wrapper } from "./style";

export default ({ id, size, bgChecked, bgNotChecked }) => {
    return (
        <Wrapper>
            <Input bgChecked={bgChecked} id={id} type="checkbox" />
            <Label
                size={size}
                htmlFor={id}
                bgNotChecked={bgNotChecked}
            >
                <Span size={size} />
            </Label>
        </Wrapper>
    );
};
 