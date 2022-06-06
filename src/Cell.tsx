import { useState } from "react";

interface CellProps {
  letter?: string;
}

export default function CellComponent(props: CellProps) {
  const defaultState: CellProps = {
    letter: props.letter ?? "",
  };
  const [state, setState] = useState(defaultState);

  return (
    <div className="border-solid border-indigo-600 box-border h-16 w-16 p-4 border-4">
      {state.letter}
    </div>
  );
}
