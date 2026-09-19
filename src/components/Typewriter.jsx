import { useEffect, useState } from 'react';

export default function Typewriter({ words, className = '' }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? 36 : 72;
    if (!deleting && text === word) delay = 1300;
    if (deleting && text === '') delay = 220;

    const id = window.setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
        return;
      }
      if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
        return;
      }
      const nextLen = text.length + (deleting ? -1 : 1);
      setText(word.slice(0, nextLen));
    }, delay);

    return () => window.clearTimeout(id);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      {text}
      <span className="cursor-blink text-accent" />
    </span>
  );
}
