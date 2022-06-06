import { useId } from "react";
import CellComponent from "./Cell";

export default function GridComponent() {
  const id = useId();
  const columnsCount = 5;
  const rowsCount = 6;

  return (
    <>
      {!!columnsCount && !!rowsCount ? (
        <div
          className={`grid gap-1 grid-cols-${columnsCount} grid-rows-${rowsCount} mb-8`}
        >
          {[...Array(columnsCount * rowsCount)].map((cell, index) => {
            return <CellComponent key={`${id} - ${index}`} />;
          })}
        </div>
      ) : null}
    </>
  );
}
