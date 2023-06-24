import { motion } from "framer-motion";

export default function Button({ text }: { text: string }) {
  //! maybe remove the prop, we don't really need it, but we will know in the future
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      className="mx-auto block w-fit rounded bg-main-light px-3 py-2 text-[1.5rem] text-black-darker hover:cursor-pointer dark:bg-main-dark"
      href="/shop"
    >
      {text}
    </motion.a>
  );
}
