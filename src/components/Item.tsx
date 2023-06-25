import { motion } from "framer-motion";

export default function Item({ item }) {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      href={`/shop/${item.frontmatter.name.replace(" ", "-").toLowerCase()}`}
      className="relative flex aspect-square w-full max-w-[500px] items-center justify-center rounded bg-white-brighter bg-[url('/illustrations/Background.svg')] shadow-sm hover:cursor-pointer dark:bg-black-darker"
    >
      <img
        src={`/item-images/${item.frontmatter.images[0]}`}
        alt={item.frontmatter.name}
      />
      <div className="absolute bottom-2 right-2 rounded bg-white-brighter px-1 text-[2rem] shadow-sm dark:bg-black-darker">
        {item.frontmatter.name}
      </div>
    </motion.a>
  );
}
