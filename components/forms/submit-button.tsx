export function SubmitButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-pine"
    >
      {children}
    </button>
  );
}
