import React from "react";
import { Container, Title } from "./style";

const IconButton = ({
    title,
    size,
    Icon,
    Dashed,
    Default,
    Primary,
    squared,
    rounded,
    onClick
}) => (
        <Container
            onClick={onClick}
            rounded={rounded}
            size={size}
            Dashed={Dashed}
            Primary={Primary}
            squared={squared}
            Default={Default}
        >
            <Title>
                <Icon />
            </Title>
            <Title>{title}</Title>
        </Container>
    );

export default IconButton;
