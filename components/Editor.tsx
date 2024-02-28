import { useScrollShadow } from '@/hooks/useScrollShadow';
import { SetStateAction, Dispatch, useRef } from 'react';

export default function Editor({
  content,
  setContent,
}: {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
}) {
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const innerShadowClass = useScrollShadow(editorRef);

  return (
    <textarea
      ref={editorRef}
      id="editor"
      className={
        'block p-4 w-full resize-none h-128 overflow-auto' +
        ' ' +
        innerShadowClass
      }
      placeholder="What would you like to read today?"
      value={content}
      onChange={(e) => setContent(e.target.value)}
    >
      {content}
    </textarea>
  );
}
