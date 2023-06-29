export default function Version() {
  return (
    <div className="group relative ml-6 rounded bg-main-light px-2 py-1 text-[1.25rem] text-black-darker hover:cursor-pointer dark:bg-main-dark">
      alpha
      <div className="absolute inset-x-0 -bottom-12 mx-auto w-[400px] rounded bg-main-light px-1.5 py-1 text-black-darker transition-opacity dark:bg-main-dark">
        This website is currently in version 0.69
      </div>
    </div>
  );
}
