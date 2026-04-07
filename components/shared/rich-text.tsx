export function RichText({
  paragraphs,
}: Readonly<{
  paragraphs: string[];
}>) {
  return (
    <div className="space-y-6">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-base leading-8">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
