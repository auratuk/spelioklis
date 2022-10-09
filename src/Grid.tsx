import { useState } from "react";
import { useId } from "react";
import WordCellsComponent from "./WordCells";

export default function GridComponent({ words }: { words: string[] }) {
  const columnsCount = 5;
  const rowsCount = 6;

  return (
    <div className="grid gap-1 grid-rows-6 mb-10">
      {words.map((word, index) => {
        return (
          <WordCellsComponent key={`${word}-${index}`} word={word ? word : ['','','','',''] } />
        );
      })}
    </div>
  );
}
