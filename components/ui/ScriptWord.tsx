// The handwritten accent word used inside headings ("thrive", "help", ...)
export default function ScriptWord({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-script text-accent text-[1.45em] leading-none align-baseline">
      {children}
    </span>
  );
}
