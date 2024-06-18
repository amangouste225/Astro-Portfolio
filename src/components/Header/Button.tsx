export default function Button() {
  return (
    <a
      href="/"
      className="flex items-center justify-center px-3 py-2 mt-3 gap-3 border border-neutral-700 hover:bg-neutral-800 w-full rounded-md"
    >
      Download CV
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          className="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </span>
    </a>
  );
}
