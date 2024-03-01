type ReaderControl = ({
  nextAction,
  backAction,
  nextToken,
}: {
  nextAction: () => void;
  backAction: () => void;
  nextToken: string;
}) => JSX.Element;
