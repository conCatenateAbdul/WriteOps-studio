import React, { useState, useEffect } from 'react';
import styles from './TypewriterEffect.module.css';

interface TypewriterEffectProps {
    text: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }, 100); // Adjust typing speed here (milliseconds)
            return () => clearTimeout(timeoutId);
        }
    }, [index, text]);

    return (
        <span className={styles.typewriterContainer}>
            <span className={styles.gradientText}>{displayedText}</span>
            <span className={styles.cursor}>|</span>
        </span>
    );
};

export default TypewriterEffect;
