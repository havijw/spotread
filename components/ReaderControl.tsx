import { useCallback, useEffect } from 'react';

export default function ReaderControl({
  nextAction,
  backAction,
}: {
  nextAction: () => void;
  backAction: () => void;
}) {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          backAction();
          break;
        case 'ArrowRight':
        case ' ':
          nextAction();
          break;
        default:
          break;
      }
    },
    [backAction, nextAction],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="grid grid-cols-2 gap-4 border-solid border-gray border-t-2 p-2">
      <button
        type="button"
        className="rounded-full p-2 bg-orange-300"
        onClick={backAction}
      >
        Back
      </button>
      <button
        type="button"
        className="rounded-full p-2 bg-blue-400"
        onClick={nextAction}
      >
        Next
      </button>
    </div>
  );
}
