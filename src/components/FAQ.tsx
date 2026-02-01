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
      "Our AI has been trained on thousands of UK conveyancing legal packs and achieves over 95% accuracy in identifying key clauses, risks, and compliance issues. The analysis is designed to assist your review process—final professional judgment always remains with the solicitor.",
  },
  {
    question: "What document types does Asta support?",
    answer:
      "Asta analyzes all standard conveyancing documents including Title Registers, Title Plans, Leases, Property Information Forms, Fixtures & Fittings Forms, Local Authority Searches, Environmental Searches, Water & Drainage Searches, Chancel Repair Liability, Contracts, and Special Conditions. We support PDF, DOC, DOCX, and scanned image formats.",
  },
  {
    question:
      "How does Asta integrate with our existing case management system?",
    answer:
      "Asta offers API access on Professional and Enterprise plans, enabling seamless integration with popular case management systems including LEAP, Clio, Smokeball, and others. Our team can assist with custom integrations for Enterprise clients.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We take data security extremely seriously. All documents are encrypted in transit (TLS 1.3) and at rest (AES-256). We're fully GDPR compliant, UK data-resident, and undergo regular security audits. Data is never used to train AI models or shared with third parties.",
  },
  {
    question: "How is our client data protected?",
    answer:
      "We take data security extremely seriously. All documents are encrypted in transit (TLS 1.3) and at rest (AES-256). We're fully GDPR compliant, UK data-resident, and undergo regular security audits. Data is never used to train AI models or shared with third parties.",
  },
  {
    question: "Can multiple fee earners access the same analysis?",
    answer:
      "Yes. All plans include dashboard access for your team. Professional and Enterprise plans offer unlimited users with role-based permissions, allowing partners, associates, and paralegals appropriate access levels.",
  },
  {
    question: "What happens after the 14-day free trial?",
    answer:
      "After your trial, you can choose the plan that fits your firm's volume. There's no automatic billing—you'll only be charged once you actively select a plan. If you decide not to continue, your data will be securely deleted after 30 days.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Immediately. Sign up takes under 2 minutes, and you can upload your first legal pack right away. No IT setup, no lengthy onboarding—just upload documents and receive your analysis within 5 minutes.",
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
