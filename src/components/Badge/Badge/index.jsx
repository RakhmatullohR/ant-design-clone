import React, { useState, useEffect } from "react";
import { Badge, IconBadge, Container, DotBadge } from "./style";


export default ({ children, count, color, bgColor, showZero, Icon, size, dotColor, dot, type }) => {
    const [badgeCount, setCount] = useState(count)
    const [more, setMore] = useState(false)
    const [iconSize, setSize] = useState(false)
    useEffect(() => {
        setCount(count > 99 ? `99+` : count)
        setMore(count > 99)
        setSize(size > 24);
    }, [count, size])
    return (
        <Container>
            {
                dot ?
                    <DotBadge
                        size={size} type={type}
                        dot={dot} dotColor={dotColor}
                    />
                    : Icon ?
                        <IconBadge more={iconSize}><Icon color={color || 'red'} size={size || 18} /></IconBadge>
                        : <Badge more={more} hide={!showZero && !count} color={color} bgColor={bgColor}>
                            {count ? badgeCount : showZero && 0}
                        </Badge>
            }
            {children}
        </Container>
    )
}
