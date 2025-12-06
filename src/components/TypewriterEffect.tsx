import React, { useState, useEffect } from 'react';
import styles from './TypewriterEffect.module.css';

interface TypewriterEffectProps {
    text: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (index < text.length) {
            setIsTyping(true);
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }, 50); // Speed up slightly for long tagline
            return () => clearTimeout(timeoutId);
        } else {
            setIsTyping(false);
        }
    }, [index, text]);

    return (
        <span className={styles.typewriterContainer}>
            <span className={styles.gradientText}>{displayedText}</span>
            <span className={`${styles.cursor} ${!isTyping ? styles.blinking : ''}`}>|</span>
        </span>
    );
};

export default TypewriterEffect;
