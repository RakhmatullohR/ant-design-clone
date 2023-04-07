import React, { useState } from "react";
import { Container, Title } from "./style";
import { Spinner } from "@styled-icons/fa-solid/Spinner";

const LoadingButton = ({
    title,
    size,
    Icon,
    Dashed,
    Default,
    Primary,
    rounded,
    loading,
    iconHidden,
    onClick
}) => {
    const [state, setState] = useState({ loading: false, show: false });
    const [isVisable, setVisible] = useState(!iconHidden);
    const toggleLoader = () => {
        setVisible(true);
        setState({ loading: true, show: true });
        timeFunction();
        onClick && onClick();
    };
    const timeFunction = () => {
        setTimeout(() => {
            setState({ loading: false });
            setVisible(false);
        }, 10000);
    };
    return (
        <Container
            onClick={toggleLoader}
            loading={state.loading ? "true" : "false"}
            rounded={rounded}
            size={size}
            Dashed={Dashed}
            Primary={Primary}
            Default={Default}
            title={title}
        >
            {isVisable && (
                <Title>
                    <Icon
                        style={{
                            animationPlayState: "paused",
                            display: state.show ? "none" : "block",
                        }}
                    />
                    <Spinner
                        style={{
                            animationPlayState: state.loading
                                ? "running"
                                : "paused",
                            display: state.show ? "block" : "none",
                        }}
                    />
                </Title>
            )}
            <Title>{title}</Title>
        </Container>
    );
};

export default LoadingButton;
