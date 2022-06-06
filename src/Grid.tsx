import { useState } from "react";
import { useId } from "react";
import WordCellsComponent from "./WordCells";

export default function GridComponent({ chars }: { chars: string[] }) {
  const columnsCount = 5;
  const rowsCount = 6;

  const newArr = [];
  while (chars.length) {
    newArr.push(chars.splice(0, columnsCount));
  }

  const arr = new Array(rowsCount);
  for (var i = 0; i < rowsCount; i++) {
    arr[i] = new Array(columnsCount);
    for (var j = 0; j < columnsCount; j++) {
      arr[i][j] = newArr.length > 0 && newArr[i][j] ? newArr[i][j] : "";
    }
  }

  const [state, setState] = useState(arr);

  const id = useId();

  return (
    <>
      {!!columnsCount && !!rowsCount ? (
        <div className={`grid gap-1 grid-rows-${rowsCount} mb-10`}>
          {[...Array(rowsCount)].map((cell, index) => {
            return (
              <WordCellsComponent key={`${id}-${index}`} word={state[index]} />
            );
          })}
        </div>
      ) : null}
    </>
  );
}
