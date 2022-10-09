import { useId } from "react";
import CellComponent from "./Cell";

export default function WordCellsComponent({ word }: { word: string[] }) {
  const id = useId();

  return (
    <div className="grid gap-1 grid-cols-5">
      {word.map((char, index) => {
        return <CellComponent key={`${id} - ${index}`} letter={char} />;
      })}
    </div>
  );
}
