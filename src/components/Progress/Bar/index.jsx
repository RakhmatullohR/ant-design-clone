import React from "react";
import {
    Wrapper,
    Container,
    Filler,
    ErrorIcon,
    DivForLabel,
    SuccessIcon,
    Span,
} from "./style";

export default ({ bgColor, status, percent, size, showInfo }) => {
    return (
        <Wrapper>
            <Container size={size} status={status}>
                <Filler
                    bgColor={bgColor || "blue"}
                    percent={percent}
                    status={status}
                />
            </Container>
            {status === "exception" ? (
                <ErrorIcon />
            ) : (
                <DivForLabel showInfo={showInfo}>
                    <SuccessIcon percent={percent} />
                    <Span percent={percent}>{`${percent}%` || "10%"}</Span>
                </DivForLabel>
            )}
        </Wrapper>
    );
};
