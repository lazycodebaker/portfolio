import React from "react";

interface ClampTextProps {
    min: string;
    max: string;
    children: React.ReactNode;
}

export default function ClampText({ min, max, children }: ClampTextProps): React.ReactNode {
    const textStyle = {
        fontSize: `clamp(${min}, 0.71rem + 5.47vw, ${max})`,
        lineHeight: '1.5',
    };

    return <h1 style={textStyle}>
        {children}
    </h1>;
}
