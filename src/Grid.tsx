import CellComponent from "./Cell";

export default function GridComponent() {
  const columnsCount = 5;
  const rowsCount = 6;

  return (
    <div
      className={`grid grid-cols-${columnsCount} grid-rows-${rowsCount} gap-1 m-auto`}
    >
      {[...Array(columnsCount * rowsCount)].map((e, i) => {
        return <CellComponent />;
      })}
    </div>
  );
}
