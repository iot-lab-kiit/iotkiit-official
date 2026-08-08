'use client';

import { useEffect, useState } from 'react';

interface Word {
  text: string;
  className?: string;
}

interface Props {
  words: Word[];
  className?: string;
  cursorClassName?: string;
}

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: Props) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (wordIndex >= words.length) return;

    const currentWord = words[wordIndex].text;

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setCharIndex((c) => c + 1);
      }, 70);

      return () => clearTimeout(timeout);
    }

    if (wordIndex < words.length - 1) {
      const timeout = setTimeout(() => {
        setWordIndex((w) => w + 1);
        setCharIndex(0);
      }, 350);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex, words]);

  return (
    <h1 className={`text-center ${className ?? ''}`}>
      {/* Completed words */}
      {words.slice(0, wordIndex).map((word, i) => (
        <span key={i} className={word.className}>
          {word.text}{' '}
        </span>
      ))}

      {/* Current typing word */}
      {wordIndex < words.length && (
        <span className={words[wordIndex].className}>
          {words[wordIndex].text.slice(0, charIndex)}
        </span>
      )}

      {/* Cursor */}
      <span
        className={`ml-1 inline-block animate-pulse ${cursorClassName ?? ''}`}
      >
        |
      </span>
    </h1>
  );
};