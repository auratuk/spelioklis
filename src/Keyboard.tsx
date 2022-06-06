import { useId } from "react";

export default function KeyboardComponent() {
  const alphabet = "ĄČĘĖĮŠŲŪŽERTYUIOPLASDFGHJKZCVBNM".split("");
  const id = useId();

  return (
    <div className="flex gap-1 flex-wrap max-w-lg justify-center items-center">
      {alphabet.map((letter, index) => {
        return (
          <button
            key={`${id} - ${index}`}
            className="bg-white w-12 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            {letter}
          </button>
        );
      })}
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Enter
      </button>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Delete
      </button>
    </div>
  );
}
