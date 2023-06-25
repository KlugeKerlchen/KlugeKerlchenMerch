import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  //TODO make a button with svg drawing, using framer motion
  return (
    <button
      onClick={handleClick}
      className="rounded p-2 transition-colors duration-200 hover:bg-white-brighter hover:shadow-sm dark:hover:bg-black-darker"
    >
      {theme === "dark" ? (
        <motion.svg
          initial="hidden"
          animate="visible"
          height="30px"
          stroke-miterlimit="10"
          // style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"
          version="1.1"
          viewBox="0 0 265 265"
          width="30px"
          // xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs />
          <g id="Ebene-1">
            <motion.path
              variants={draw}
              d="M159.188 12.4062C92.8582 12.4062 39.0938 66.1706 39.0938 132.5C39.0935 198.829 92.8581 252.594 159.188 252.594C183.875 252.594 206.823 245.148 225.906 232.375C225.036 232.397 224.188 232.5 223.312 232.5C168.084 232.5 123.312 187.729 123.312 132.5C123.312 77.2715 168.084 32.5 223.312 32.5C224.178 32.5 225.015 32.6031 225.875 32.625C206.796 19.8614 183.865 12.4062 159.188 12.4062Z"
              fill="none"
              opacity="1"
              stroke="#FFFFFF"
              style={{
                strokeWidth: 20,
                strokeLinecap: "butt",
                strokeLinejoin: "round",
              }}
            />
          </g>
        </motion.svg>
      ) : (
        // <motion.svg
        //   initial="hidden"
        //   animate="visible"
        //   height="30px"
        //   stroke-miterlimit="10"
        //   // style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"
        //   version="1.1"
        //   viewBox="0 0 265 265"
        //   width="30px"
        //   // xml:space="preserve"
        //   xmlns="http://www.w3.org/2000/svg"
        //   // xmlns:xlink="http://www.w3.org/1999/xlink"
        // >
        //   <defs />
        //   <g id="Ebene-1">
        //     <motion.path
        //       variants={draw}
        //       style={{
        //         strokeWidth: 20,
        //         strokeLinecap: "butt",
        //         strokeLinejoin: "round",
        //       }}
        //       d="M252.598 132.503L212.171 132.503"
        //       fill="none"
        //       opacity="0"
        //       stroke="#000000"
        //     />
        //     <motion.path
        //       variants={draw}
        //       style={{
        //         strokeWidth: 20,
        //         strokeLinecap: "butt",
        //         strokeLinejoin: "round",
        //       }}
        //       d="M252.598 132.503L212.171 132.503"
        //       fill="none"
        //       opacity="1"
        //       stroke="#000000"
        //     />
        //     <motion.path
        //       variants={draw}
        //       style={{
        //         strokeWidth: 20,
        //         strokeLinecap: "butt",
        //         strokeLinejoin: "round",
        //       }}
        //       d="M217.42 217.424L188.834 188.838"
        //       fill="none"
        //       opacity="1"
        //       stroke="#000000"
        //     />
        //     <motion.path
        //       variants={draw}
        //       style={{
        //         strokeWidth: 20,
        //         strokeLinecap: "butt",
        //         strokeLinejoin: "round",
        //       }}
        //       d="M132.5 252.6L132.5 212.174"
        //       fill="none"
        //       opacity="1"
        //       stroke="#000000"
        //     />
        //     <motion.path
        //       variants={draw}
        //       style={{
        //         strokeWidth: 20,
        //         strokeLinecap: "butt",
        //         strokeLinejoin: "round",
        //       }}
        //       d="M47.5762 217.424L76.162 188.838"
        //       fill="none"
        //       opacity="1"
        //       stroke="#000000"
        //     />
        //     <motion.path
        //       variants={draw}
        //       style={{
        //         strokeWidth: 20,
        //         strokeLinecap: "butt",
        //         strokeLinejoin: "round",
        //       }}
        //       d="M132.5 52.826L132.5 12.3996"
        //       fill="none"
        //       opacity="1"
        //       stroke="#000000"
        //     />
        //     <motion.path
        //       variants={draw}
        //       style={{
        //         strokeWidth: 20,
        //         strokeLinecap: "butt",
        //         strokeLinejoin: "round",
        //       }}
        //       d="M188.838 76.162L217.424 47.5762"
        //       fill="none"
        //       opacity="1"
        //       stroke="#000000"
        //     />
        //     <motion.path
        //       variants={draw}
        //       style={{
        //         strokeWidth: 20,
        //         strokeLinecap: "butt",
        //         strokeLinejoin: "round",
        //       }}
        //       d="M12.4023 123.509L52.8288 123.509"
        //       fill="none"
        //       opacity="1"
        //       stroke="#000000"
        //     />
        //     <motion.path
        //       variants={draw}
        //       style={{
        //         strokeWidth: 20,
        //         strokeLinecap: "butt",
        //         strokeLinejoin: "round",
        //       }}
        //       d="M53.9356 41.2207L82.5214 69.8065"
        //       fill="none"
        //       opacity="1"
        //       stroke="#000000"
        //     />
        //     <motion.path
        //       variants={draw}
        //       style={{
        //         strokeWidth: 20,
        //         strokeLinecap: "butt",
        //         strokeLinejoin: "round",
        //       }}
        //       d="M83.0801 132.503C83.0801 105.209 105.206 83.0828 132.5 83.0828C159.794 83.0828 181.92 105.209 181.92 132.503C181.92 159.797 159.794 181.923 132.5 181.923C105.206 181.923 83.0801 159.797 83.0801 132.503Z"
        //       fill="none"
        //       opacity="1"
        //       stroke="#000000"
        //     />
        //   </g>
        // </motion.svg>
        <svg
          // initial="hidden"
          // animate="visible"
          height="100%"
          stroke-miterlimit="10"
          //style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"
          version="1.1"
          viewBox="0 0 265 265"
          width="30px"
          //xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          //xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs />
          <g id="Ebene-1">
            <motion.path
              variants={draw}
              style={{
                strokeWidth: 20,
                strokeLinecap: "butt",
                strokeLinejoin: "round",
              }}
              d="M83.0801 132.503C83.0801 105.209 105.206 83.0828 132.5 83.0828C159.794 83.0828 181.92 105.209 181.92 132.503C181.92 159.797 159.794 181.923 132.5 181.923C105.206 181.923 83.0801 159.797 83.0801 132.503Z"
              fill="none"
              opacity="1"
              stroke="#000000"
            />
            <path
              d="M212.171 132.503L252.598 132.503"
              fill="none"
              opacity="1"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="bevel"
              stroke-width="20"
            />
            <path
              d="M188.834 188.838L217.42 217.424"
              fill="none"
              opacity="1"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="bevel"
              stroke-width="20"
            />
            <path
              d="M132.5 212.174L132.5 252.6"
              fill="none"
              opacity="1"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="bevel"
              stroke-width="20"
            />
            <path
              d="M76.162 188.838L47.5762 217.424"
              fill="none"
              opacity="1"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="bevel"
              stroke-width="20"
            />
            <path
              d="M132.5 52.826L132.5 12.3996"
              fill="none"
              opacity="1"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="bevel"
              stroke-width="20"
            />
            <path
              d="M188.838 76.162L217.424 47.5762"
              fill="none"
              opacity="1"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="bevel"
              stroke-width="20"
            />
            <path
              d="M52.8288 123.509L12.4023 123.509"
              fill="none"
              opacity="1"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="bevel"
              stroke-width="20"
            />
            <path
              d="M82.5214 69.8065L53.9356 41.2207"
              fill="none"
              opacity="1"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="bevel"
              stroke-width="20"
            />
          </g>
        </svg>
      )}
    </button>
  );
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 }, //TODO maybe remove opacity
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
    },
  },
};
