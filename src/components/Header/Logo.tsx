export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 mt-10 px-10 text-sm">
      <div className="w-9 h-9 rounded-full border border-neutral-700 bg-[url('/mike.jpg')] bg-center bg-contain "></div>
      <div className="flex flex-col gap-0">
        <span>Amangoua Ange-Thierry</span>
        <span>UI Designer - Developer</span>
      </div>
    </a>
  );
}
