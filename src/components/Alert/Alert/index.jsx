import React, { useState, useEffect } from "react";
import {
    Alert,
    Description,
    Wrapper,
    SuccessIcon,
    WarningIcon,
    InfoIcon,
    ErrorIcon,
    CrossIcon,
    CloseText,
    FlexWrapper,
} from "./style";

export default ({ text, type, description, Icon, closeText, closable }) => {
    const [display, setDisplay] = useState(true);
    let timeout;
    const closeAlert = () => {
        timeout = setTimeout(() => {
            setDisplay(false);
            clearTimeout(timeout);
        }, 500);
    };


    let icon;

    const specifyIcon = () => {
        if (type === "success") {
            icon = <SuccessIcon description={description} />;
        } else if (type === "warning") {
            icon = <WarningIcon description={description} />;
        } else if (type === "error") {
            icon = <ErrorIcon description={description} />;
        } else if (type === "info") {
            icon = <InfoIcon description={description} />;
        } else {
            icon = null;
        }
    };
    specifyIcon();

    useEffect(() => {
        specifyIcon();
    });

    return (
        <Alert text={text} type={type} display={display ? 1 : 0} Icon={Icon}>
            <Wrapper>
                <div>{Icon === true ? icon : null}</div>
                <FlexWrapper closable={closable && !closeText ? true: false}>
                    {text}
                    {description && (
                        <Description description={description}>
                            {description}
                        </Description>
                    )}
                </FlexWrapper>
                {closable && !closeText ? (
                    <CrossIcon description={description} onClick={closeAlert} />
                ) : (
                    <CloseText description={description} onClick={closeAlert}>
                        {closeText}
                    </CloseText>
                )}
            </Wrapper>
        </Alert>
    );
};
