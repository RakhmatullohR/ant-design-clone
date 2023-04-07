import React, { useState } from "react";
import { Container, Layout } from "./style";

const Tooltip = ({
    delay, children, content,
    direction, size, bgColor,
}) => {
    let timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay || 400);
    };
    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <Container
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {active && <Layout size={size} direction={direction} bgColor={bgColor}>{content}</Layout>}
            {children}
        </Container>
    );
};

export default Tooltip;
