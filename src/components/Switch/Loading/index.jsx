import React from "react";
import { Input, Label, Span, Wrapper } from "./style";
import { Spinner3 } from "@styled-icons/evil/Spinner3";

export default ({ id, size, loading, bgChecked, bgNotChecked }) => {
    return (
        <Wrapper>
            <Input
                bgChecked={bgChecked}
                loading={loading ? "true" : "false"}
                disabled={loading ? true : false}
                id={id}
                type="checkbox"
            />
            <Label
                disabled={loading ? true : false}
                loading={loading ? "true" : "false"}
                bgNotChecked={bgNotChecked}
                size={size}
                htmlFor={id}
            >
                <Span size={size}>
                    <Span.I
                        size={size}
                        style={{ display: loading ? "block" : "none" }}
                    >
                        <Spinner3 />
                    </Span.I>
                </Span>
            </Label>
        </Wrapper>
    );
};
