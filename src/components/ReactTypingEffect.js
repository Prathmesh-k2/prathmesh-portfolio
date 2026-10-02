import React, { useState, useEffect } from 'react';

function ReactTypingEffect({
  text = [],
  speed = 100,
  eraseSpeed = 50,
  typingDelay = 500,
  eraseDelay = 2000,
  cursor = '|',
  cursorRenderer
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!text || text.length === 0) return;

    const currentString = text[textIndex % text.length];
    let timer;

    if (!isDeleting) {
      if (charIndex < currentString.length) {
        timer = setTimeout(() => {
          setDisplayText(currentString.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        }, speed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, eraseDelay);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentString.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, eraseSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex(prev => prev + 1);
        timer = setTimeout(() => {}, typingDelay);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, text, speed, eraseSpeed, typingDelay, eraseDelay]);

  const renderedCursor = cursorRenderer ? cursorRenderer(cursor) : <span>{cursor}</span>;

  return (
    <span>
      <span>{displayText}</span>
      {renderedCursor}
    </span>
  );
}

export default ReactTypingEffect;
