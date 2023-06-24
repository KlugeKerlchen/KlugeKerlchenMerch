export default function Item({ item }) {
  return (
    <a
      href={`/shop/${item.frontmatter.name.replace(" ", "-").toLowerCase()}`}
      className="flex aspect-square w-full max-w-[500px] items-center justify-center rounded bg-white-brighter shadow-sm hover:cursor-pointer dark:bg-black-darker"
    >
      <img alt={item.frontmatter.name} />
    </a>
  );
}
