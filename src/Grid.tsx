import { useId } from "react";
import WordCellsComponent from "./WordCells";

export default function GridComponent() {
  const id = useId();
  const columnsCount = 5;
  const rowsCount = 6;

  return (
    <>
      {!!columnsCount && !!rowsCount ? (
        <div className={`grid gap-1 grid-rows-${rowsCount}`}>
          {[...Array(columnsCount)].map((cell, index) => {
            return (
              <WordCellsComponent
                key={`${id}-${index}`}
                columnsCount={columnsCount}
              />
            );
          })}
        </div>
      ) : null}
    </>
  );
}
