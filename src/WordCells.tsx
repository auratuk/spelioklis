import { useId } from "react";
import CellComponent from "./Cell";

export default function WordCellsComponent({
  columnsCount,
}: {
  columnsCount: number;
}) {
  const id = useId();

  return (
    <div className={`grid gap-1 grid-cols-${columnsCount}`}>
      {[...Array(columnsCount)].map((cell, index) => {
        return <CellComponent key={`${id} - ${index}`} />;
      })}
    </div>
  );
}
