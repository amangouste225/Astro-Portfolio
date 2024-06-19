type Props = {
  children: React.ReactNode;
  type?: "medium" | "full";
  color?: "white" | "transparent";
};

export default function Button({ children, type, color }: Props) {
  return (
    <a
      href="/"
      className={`flex items-center justify-center {type === 'medium' && 'p-3'} px-3 py-2 mt-4 gap-3 border ${
        color === "white"
          ? "bg-white text-neutral-950 hover:text-neutral-100"
          : "bg-transparent"
      } hover:bg-neutral-800 border-neutral-700 ${
        type === "medium" && "w-32"
      } rounded-md`}
    >
      {children}
    </a>
  );
}
