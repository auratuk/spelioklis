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
    <div className="border-solid border-indigo-600 box-border h-16 w-16 border-4 text-center">
      <label className="text-4xl leading-normal font-thin">
        {state.letter}
      </label>
    </div>
  );
}
