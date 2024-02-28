import { useScrollShadow } from '@/hooks/useScrollShadow';
import { useRef } from 'react';

export default function ReaderContent({
  highlighted,
  non_highlighted,
}: {
  highlighted: string[];
  non_highlighted: string[];
}) {
  const readerRef = useRef<HTMLDivElement>(null);
  const innerShadowClass = useScrollShadow(readerRef);

  return (
    <div
      ref={readerRef}
      className={
        'p-4 h-128 overflow-auto rounded whitespace-pre-line' +
        ' ' +
        innerShadowClass
      }
    >
      {highlighted.map((word, index) => (
        <span className="bg-yellow-300" key={index}>
          {word}
        </span>
      ))}
      {non_highlighted.map((word, index) => (
        <span className="bg-gray-100" key={index}>
          {word}
        </span>
      ))}
    </div>
  );
}
