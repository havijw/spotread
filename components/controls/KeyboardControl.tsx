import { useState, ChangeEvent } from 'react';
import { clean } from '@/processing/tokenize';

const KeyboardControl: ReaderControl = ({
  nextAction,
  backAction,
  nextToken,
}) => {
  const [currentlyReading, setCurrentlyReading] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (clean(nextToken) === clean(e.target.value)) {
      setCurrentlyReading('');
      nextAction();
    } else {
      setCurrentlyReading(e.target.value);
    }
  };

  return (
    <input
      name="currentlyReading"
      value={currentlyReading}
      onChange={handleChange}
      className="p-2 w-full border-solid border-gray border-t-2"
    />
  );
};

export default KeyboardControl;
