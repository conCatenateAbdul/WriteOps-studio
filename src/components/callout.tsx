import React from 'react';

export default function Callout({ children, type = 'info' }: { children: React.ReactNode, type?: 'info' | 'warning' | 'note' | 'tip' | 'danger' }) {
    const colors = {
        info: '#0ea5e9',
        warning: '#f59e0b',
        note: '#8b5cf6',
        tip: '#10b981',
        danger: '#ef4444',
    };
    const color = colors[type] || colors.info;
    const style = {
        borderLeft: `4px solid ${color}`,
        backgroundColor: `var(--ifm-background-surface-color)`,
        padding: '1rem',
        margin: '1rem 0',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    };

    return (
        <div style={style} className={`callout callout--${type}`}>
            {children}
        </div>
    );
}
