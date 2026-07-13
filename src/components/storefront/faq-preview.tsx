import { Plus } from "lucide-react";

type Faq = { question: string; answer: string };

function FaqPreview({ faqs }: { faqs: readonly Faq[] }) {
  return <div className="divide-y divide-border border-y border-border">{faqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold marker:content-none"><span>{faq.question}</span><Plus className="size-5 shrink-0 text-secondary transition-transform group-open:rotate-45" aria-hidden="true" /></summary><p className="max-w-2xl pt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p></details>)}</div>;
}

export { FaqPreview };
