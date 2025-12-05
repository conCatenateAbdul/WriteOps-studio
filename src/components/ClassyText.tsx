import React, { ReactNode } from 'react';

interface ClassyTextProps {
    children: ReactNode;
}

export default function ClassyText({ children }: ClassyTextProps) {
    return <div className="classy-text">{children}</div>;
}
