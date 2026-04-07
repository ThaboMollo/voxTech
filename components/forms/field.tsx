import { cn } from "@/lib/utils/cn";

type FieldProps = {
  label: string;
  name: string;
  placeholder: string;
  textarea?: boolean;
};

export function Field({ label, name, placeholder, textarea = false }: Readonly<FieldProps>) {
  const sharedClassName =
    "w-full rounded-[1.25rem] border border-black/10 bg-sand/60 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate focus:border-ink";

  return (
    <label className="block space-y-2">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">{label}</span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} rows={5} className={cn(sharedClassName, "resize-none")} />
      ) : (
        <input name={name} placeholder={placeholder} className={sharedClassName} />
      )}
    </label>
  );
}
