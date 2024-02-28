import { useEffect, useState, RefObject } from 'react';

export function useScrollShadow(ref: RefObject<HTMLElement>) {
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (el) {
        setAtTop(el.scrollTop === 0);
        setAtBottom(el.scrollHeight - el.scrollTop === el.clientHeight);
      }
    };

    const el = ref.current;
    if (el) {
      handleScroll();
      el.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (el) {
        el.removeEventListener('scroll', handleScroll);
      }
    };
  }, [ref]);

  if (!atTop && !atBottom) return 'shadow-inner-y';
  else if (!atTop) return 'shadow-inner-t';
  else if (!atBottom) return 'shadow-inner-b';
  else return '';
}
