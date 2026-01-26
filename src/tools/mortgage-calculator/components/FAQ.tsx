import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a buy-to-let mortgage?",
    answer:
      "A buy-to-let mortgage is specifically designed for purchasing property that you intend to rent out to tenants. They typically have higher interest rates and require larger deposits than residential mortgages, usually a minimum of 25%.",
  },
  {
    question: "How much deposit do I need for a BTL mortgage?",
    answer:
      "Most lenders require a minimum deposit of 25% for buy-to-let mortgages, though some may accept 20%. The more deposit you put down, the better interest rates you're likely to receive. Our calculator allows you to explore different deposit amounts and their impact on your monthly payments.",
  },
  {
    question: "How is stamp duty calculated for additional properties?",
    answer:
      "When purchasing an additional property (including buy-to-let), you pay a 5% surcharge on top of standard stamp duty rates. This applies to the entire property value. Our calculator automatically applies these additional property rates to give you accurate stamp duty estimates.",
  },
  {
    question: "What is LTV and why does it matter?",
    answer:
      "LTV (Loan-to-Value) is the percentage of the property value you're borrowing. A 75% LTV means you're borrowing 75% and putting down a 25% deposit. Lower LTV ratios typically result in better interest rates and more mortgage options.",
  },
  {
    question: "Can I get a buy-to-let mortgage if I don't own my own home?",
    answer:
      "Some lenders offer buy-to-let mortgages to those who don't own their own home, but options are more limited. Most prefer borrowers who are already homeowners. If you're a first-time buyer looking at BTL, consider specialist lenders or speaking with a mortgage broker.",
  },
  {
    question: "Are the stamp duty rates the same across the UK?",
    answer:
      "No, stamp duty rates differ across UK nations. Our calculator uses England and Northern Ireland rates. Scotland uses Land and Buildings Transaction Tax (LBTT), and Wales uses Land Transaction Tax (LTT), both with different thresholds and rates.",
  },
  {
    question: "What other costs should I consider beyond the mortgage?",
    answer:
      "Beyond your mortgage and stamp duty, budget for: legal fees (£1,000-2,000), survey costs (£300-600), mortgage arrangement fees (0-2% of loan), landlord insurance, potential refurbishment costs, letting agent fees (typically 8-12% of rent), and maintenance reserves.",
  },
  {
    question: "Is this calculator accurate for my situation?",
    answer:
      "Our calculator provides estimates based on standard mortgage calculations and current additional property stamp duty rates. Actual mortgage offers depend on your personal circumstances, credit history, and lender criteria. Always consult a qualified mortgage advisor for personalised advice.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-card/50 py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Common questions about buy-to-let mortgages and property investment in the UK.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-border/50 bg-background px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
