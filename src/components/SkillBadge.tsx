import React from 'react';

export default function SkillBadge({ children }: { children: React.ReactNode }) {
    const style = {
        display: 'inline-block',
        padding: '0.25rem 0.75rem',
        margin: '0.25rem',
        borderRadius: '16px',
        backgroundColor: 'var(--ifm-color-primary-lightest)',
        color: 'var(--ifm-color-primary-dark)',
        fontSize: '0.85rem',
        fontWeight: '600',
        border: '1px solid var(--ifm-color-primary-light)',
    };
    return <span style={style}>{children}</span>;
}
