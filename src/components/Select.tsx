import { useState } from "react";

export default function Select() {
  const [selected, setSelected] = useState("");
  return (
    <div className="mb-8 flex flex-wrap gap-4">
      <button
        onClick={(e) => {
          setSelected((e.target as HTMLButtonElement).innerText);
        }}
        className="rounded bg-gray-100 px-3 py-1 hover:cursor-pointer"
      >
        Jihad
      </button>
      <button
        onClick={(e) => {
          setSelected((e.target as HTMLButtonElement).innerText);
        }}
        className="rounded bg-gray-100 px-3 py-1 hover:cursor-pointer"
      >
        XS
      </button>
      <button
        onClick={(e) => {
          setSelected((e.target as HTMLButtonElement).innerText);
        }}
        className="rounded bg-gray-100 px-3 py-1 hover:cursor-pointer"
      >
        S
      </button>
      <button
        onClick={(e) => {
          setSelected((e.target as HTMLButtonElement).innerText);
        }}
        className="rounded bg-gray-100 px-3 py-1 hover:cursor-pointer"
      >
        M
      </button>
    </div>
  );
}
