import React from "react";
import { SVG, Circle, CircleLabel, CirclePercent, CircleText, circleConfig } from "./style";

export default (
    { percent, innerText, status, size, showInfo, strokeColor, fill }
) => {
    return (
        <SVG viewBox={circleConfig.viewBox} size={size}>
            <Circle
                className="path"
                cx={circleConfig.x}
                cy={circleConfig.y}
                r={circleConfig.radio}
                fill={fill || 'transparent'}
                strokeColor={strokeColor || 'red'}
                status={status}
                percent={percent}
                strokeDasharray={`${percent} ${100 - percent}`}
                strokeDashoffset={25}
            />
            <CircleLabel showInfo={showInfo}>
                <CirclePercent
                    status={status} x="50%" y="50%" percent={percent}>
                    {status !== "exception" ? percent + "%" : <>&#10006;</>}
                </CirclePercent>
                {status !== "exception" && (
                    <CircleText x="50%" y="50%" percent={percent}>
                        {innerText}
                    </CircleText>
                )}
            </CircleLabel>
        </SVG>
    );
};

