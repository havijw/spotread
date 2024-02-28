'use client';

import { useState } from 'react';
import { tokenize } from '@/processing/tokenize';

const DOC = `Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!`;

export default function Home() {
  const [highlighted, setHighlighted] = useState<number>(0);

  const tokens = tokenize(DOC);
  const highlighted_text = tokens.slice(0, highlighted);
  const non_highlighted_text = tokens.slice(highlighted);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="border-solid border-2 border-gray col-span-2 p-2 rounded whitespace-pre-line">
        {highlighted_text.map((word, index) => (
          <span className="bg-yellow-300" key={index}>
            {word}
          </span>
        ))}
        {non_highlighted_text.map((word, index) => (
          <span className="bg-gray-100" key={index}>
            {word}
          </span>
        ))}
      </div>
      <button
        type="button"
        className="rounded-full p-2 bg-orange-300"
        onClick={() => setHighlighted((h) => (h - 1 < 0 ? h : h - 1))}
      >
        Back
      </button>
      <button
        type="button"
        className="rounded-full p-2 bg-blue-400"
        onClick={() =>
          setHighlighted((h) => (h + 1 > tokens.length ? h : h + 1))
        }
      >
        Next
      </button>
    </div>
  );
}
