import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the AI analysis?",
    answer:
      "Our AI has been trained on thousands of UK auction legal packs and achieves over 95% accuracy in identifying key clauses, risks, and fees. However, we always recommend consulting with a solicitor for final verification on properties you intend to bid on.",
  },
  {
    question: "What types of documents can Asta analyse?",
    answer:
      "Asta can analyse all standard auction legal pack documents including title registers, lease agreements, searches, property information forms, special conditions of sale, and more. We support PDF, DOC, and image formats.",
  },
  {
    question: "How long does the analysis take?",
    answer:
      "Most legal packs are analysed within 2-5 minutes, depending on the complexity and number of documents. You'll receive a comprehensive report as soon as the analysis is complete.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use end-to-end encryption for all document uploads and storage. Your data is processed securely and never shared with third parties. We comply with GDPR and UK data protection regulations.",
  },
  {
    question: "Can I ask questions about specific clauses?",
    answer:
      "Yes! Our AI Legal Assistant allows you to ask natural language questions about any part of your legal pack. Simply type your question and get instant, contextual answers.",
  },
  {
    question: "What if I need to cancel my subscription?",
    answer:
      "You can cancel your subscription at any time with no questions asked. There are no long-term contracts or cancellation fees. Your access will continue until the end of your billing period.",
  },
];

const FAQ = () => {
  return (
    <section id="faqs" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-label mb-3 block">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Asta and how it works.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
