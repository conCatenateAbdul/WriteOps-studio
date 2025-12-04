import React from 'react';

export default function Callout({
    children,
    type = 'info',
    emoji
}: {
    children: React.ReactNode,
    type?: 'info' | 'warning' | 'note' | 'tip' | 'danger',
    emoji?: string
}) {
    const colors = {
        info: '#0ea5e9',
        warning: '#f59e0b',
        note: '#8b5cf6',
        tip: '#10b981',
        danger: '#ef4444',
    };
    const color = colors[type] || colors.info;

    const containerStyle = {
        borderLeft: `4px solid ${color}`,
        backgroundColor: 'var(--ifm-background-surface-color)',
        padding: '1rem',
        margin: '1.5rem 0',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
    };

    const emojiStyle = {
        fontSize: '1.5rem',
        lineHeight: 1,
        marginTop: '0.1rem'
    };

    const contentStyle = {
        flex: 1,
        minWidth: 0, // Fix for flexbox text overflow
    };

    return (
        <div style={containerStyle} className={`callout callout--${type}`}>
            {emoji && <span style={emojiStyle}>{emoji}</span>}
            <div style={contentStyle}>
                {children}
            </div>
        </div>
    );
}
