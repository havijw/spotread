'use client';

import { useEffect, useState } from 'react';
import { tokenize } from '@/processing/tokenize';
import ReaderContent from '@/components/ReaderContent';
import KeyboardControl from '@/components/controls/KeyboardControl';
import Editor from '@/components/Editor';

export default function Home() {
  const [content, setContent] = useState<string>('');
  const [highlighted, setHighlighted] = useState<number>(0);
  const [editing, setEditing] = useState<boolean>(true);

  useEffect(() => {
    setHighlighted(0);
  }, [content]);

  const tokens = tokenize(content);
  const highlighted_tokens = tokens.slice(0, highlighted);
  const non_highlighted_tokens = tokens.slice(highlighted);

  return (
    <div className="border-solid border-gray border-2 rounded">
      <div className="grid grid-cols-2 border-b-2">
        <button
          type="button"
          className={
            editing ? 'border-solid border-gray border-b-2 bg-gray-100' : ''
          }
          onClick={() => setEditing(true)}
        >
          Edit
        </button>
        <button
          type="button"
          className={
            !editing ? 'border-solid border-gray border-b-2 bg-gray-100' : ''
          }
          onClick={() => setEditing(false)}
        >
          Read
        </button>
      </div>
      {editing ? (
        <Editor content={content} setContent={setContent} />
      ) : (
        <div>
          <ReaderContent
            highlighted={highlighted_tokens}
            non_highlighted={non_highlighted_tokens}
          />
          <KeyboardControl
            nextAction={() =>
              setHighlighted(Math.min(highlighted + 1, tokens.length))
            }
            backAction={() => setHighlighted(Math.max(highlighted - 1, 0))}
            nextToken={
              non_highlighted_tokens.length > 0 ? non_highlighted_tokens[0] : ''
            }
          />
        </div>
      )}
    </div>
  );
}
