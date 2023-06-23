export default function Item({ item }) {
  return (
    <a
      href={`/shop/${item.frontmatter.name.replace(" ", "-").toLowerCase()}`}
      className="flex aspect-square w-full max-w-[500px] items-center justify-center rounded bg-gray-100 hover:cursor-pointer"
    >
      <img alt={item.frontmatter.name} />
    </a>
  );
}
