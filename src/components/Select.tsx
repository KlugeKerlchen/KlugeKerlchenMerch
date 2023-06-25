import { useState } from "react";
import { motion } from "framer-motion";

export default function Select() {
  const [selected, setSelected] = useState("M");
  const items = [
    { id: "Jihad" },
    { id: "XS" },
    { id: "S" },
    { id: "M" },
    { id: "L" },
    { id: "XL" },
  ];
  return (
    <div className="mb-8 flex flex-wrap gap-4">
      {items.map((item) => (
        <div
          style={{
            position: "relative",
          }}
          key={item.id}
          onClick={() => setSelected(item.id)}
        >
          <button
            onClick={(e) => {
              setSelected((e.target as HTMLButtonElement).innerText);
            }}
            className="rounded bg-white-brighter px-3 py-1 hover:cursor-pointer dark:bg-black-darker"
          >
            {item.id}
          </button>
          {selected === item.id && (
            <motion.div
              layoutId="border"
              className=" z-10 border-4 border-solid border-main-light dark:border-main-dark"
              style={{
                position: "absolute",
                borderRadius: "4px",
                top: "0",
                bottom: "0",
                right: "0",
                left: "0",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
