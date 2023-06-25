import { motion } from "framer-motion";

export default function Button() {
  //! maybe remove the prop, we don't really need it, but we will know in the future
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      className="w-fit rounded bg-main-light px-3 py-2 text-[1.5rem] text-black-darker hover:cursor-pointer dark:bg-main-dark"
    >
      Request
    </motion.button>
  );
}
