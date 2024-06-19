export default function Logo() {
  return (
    <a
      href="/"
      className="flex items-center gap-2 lg:mt-10 px-5 text-sm dark:text-neutral-50 text-neutral-100 lg:text-neutral-900"
    >
      <div className="w-9 h-9 rounded-full border border-neutral-700 bg-[url('/mike.jpg')] bg-center bg-contain "></div>
      <div className="flex flex-col gap-0">
        <span>Amangoua Ange-Thierry</span>
        <span>UI Designer - Developer</span>
      </div>
    </a>
  );
}
