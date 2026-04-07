import { Card } from "@/components/shared/card";

import { Field } from "@/components/forms/field";
import { SubmitButton } from "@/components/forms/submit-button";

export function ContactForm() {
  return (
    <Card className="p-8">
      <form className="grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Full Name" name="fullName" placeholder="Your full name" />
          <Field label="Company Name" name="companyName" placeholder="Your company" />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Email" name="email" placeholder="you@company.com" />
          <Field label="Service Interest" name="serviceInterest" placeholder="What are you exploring?" />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Estimated Timeline" name="estimatedTimeline" placeholder="e.g. 6-8 weeks" />
          <Field label="Budget Range" name="budgetRange" placeholder="e.g. R100k-R250k" />
        </div>
        <Field
          label="Project Message"
          name="message"
          placeholder="Describe the problem, context, or product idea."
          textarea
        />
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-slate">Form wiring to API and validation is the next layer.</p>
          <SubmitButton>Send inquiry</SubmitButton>
        </div>
      </form>
    </Card>
  );
}
