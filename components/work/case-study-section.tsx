import { Card } from "@/components/shared/card";

export function CaseStudySection({
  title,
  body,
}: Readonly<{
  title: string;
  body: string;
}>) {
  return (
    <Card className="p-8">
      <h2 className="text-3xl text-ink">{title}</h2>
      <p className="mt-4 max-w-3xl text-base leading-8">{body}</p>
    </Card>
  );
}
