import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is stamp duty?",
    answer:
      "Stamp Duty Land Tax (SDLT) is a tax you pay when buying property or land in England and Northern Ireland. Scotland has Land and Buildings Transaction Tax (LBTT), and Wales has Land Transaction Tax (LTT). The amount depends on the property price, whether it's your first home, and if it's an additional property.",
  },
  {
    question: "Do first-time buyers pay stamp duty?",
    answer:
      "First-time buyers in England and Northern Ireland pay no stamp duty on properties up to £425,000. For properties between £425,001 and £625,000, they pay 5% only on the portion above £425,000. If the property costs more than £625,000, standard rates apply to the entire purchase.",
  },
  {
    question: "What is the additional property surcharge?",
    answer:
      "If you're buying a second home or buy-to-let property, you'll pay an additional 5% on top of standard stamp duty rates in England and Northern Ireland. This applies from the first pound of the property price. Scotland and Wales have similar but different surcharges.",
  },
  {
    question: "When do I have to pay stamp duty?",
    answer:
      "Stamp duty must be paid within 14 days of completion of your property purchase. In most cases, your solicitor or conveyancer will handle this payment and submission on your behalf as part of the conveyancing process.",
  },
  {
    question: "Are stamp duty rates different in Scotland?",
    answer:
      "Yes, Scotland uses Land and Buildings Transaction Tax (LBTT) instead of stamp duty. The thresholds and rates are different. Standard purchases are tax-free up to £145,000, with graduated rates above that. The additional dwelling supplement is currently 6%.",
  },
  {
    question: "Are stamp duty rates different in Wales?",
    answer:
      "Yes, Wales uses Land Transaction Tax (LTT) instead of stamp duty. The starting threshold for residential properties is £225,000, with graduated rates above. Additional property purchases have higher rates starting from 4%.",
  },
  {
    question: "Can I get a refund on the additional surcharge?",
    answer:
      "Yes, if you're replacing your main residence but had to pay the additional surcharge because you owned two properties temporarily, you can claim a refund within 3 years if you sell your previous main home. You'll need to apply to HMRC for this refund.",
  },
  {
    question: "Is this calculator accurate for my situation?",
    answer:
      "Our calculator uses current 2024 rates and provides accurate estimates for most residential property purchases. However, some complex situations (shared ownership, corporate purchases, non-resident buyers) may have different rules. Always confirm with a solicitor for your specific circumstances.",
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
            Common questions about stamp duty and property transaction taxes in the UK.
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
