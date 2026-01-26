import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is rental yield?",
    answer:
      "Rental yield is the annual return on a property investment, expressed as a percentage. It's calculated by dividing the annual rental income by the property's purchase price. Gross yield uses total rent, while net yield subtracts operating costs.",
  },
  {
    question: "What is a good rental yield in the UK?",
    answer:
      "A good gross rental yield in the UK typically ranges from 5-8%. However, this varies significantly by location—northern cities like Liverpool and Manchester often achieve 6-8%, while London properties may yield 3-5% but offer better capital growth potential.",
  },
  {
    question: "What's the difference between gross and net yield?",
    answer:
      "Gross yield is the simple calculation of annual rent divided by property value. Net yield deducts all running costs (management fees, insurance, maintenance, voids, etc.) before dividing by property value. Net yield gives a more accurate picture of actual returns.",
  },
  {
    question: "What costs should I include in net yield calculations?",
    answer:
      "Include: letting agent fees (8-12% of rent), landlord insurance (£200-400/year), maintenance budget (1% of property value), service charges for flats, ground rent for leasehold, gas safety certificates, EPC costs, and an allowance for void periods.",
  },
  {
    question: "What is cash-on-cash return?",
    answer:
      "Cash-on-cash return measures the annual return on the actual cash you've invested (your deposit), not the total property value. If you put down £50,000 and receive £4,000 net income annually, your cash-on-cash return is 8%. This is more relevant for leveraged investments.",
  },
  {
    question: "How do void periods affect rental yield?",
    answer:
      "Void periods—when your property is empty between tenants—directly reduce your annual income. Even 2-4 weeks of void per year can reduce your yield by 4-8%. Factor in realistic void periods, especially for properties in areas with lower tenant demand.",
  },
  {
    question: "Should I prioritise yield or capital growth?",
    answer:
      "This depends on your investment goals. High-yield properties (often in northern cities) provide better cash flow. Lower-yield properties (like London) may offer stronger capital appreciation. Many investors seek a balance or diversify across both strategies.",
  },
  {
    question: "Is this calculator accurate for my situation?",
    answer:
      "Our calculator provides estimates based on the inputs you provide. Actual yields depend on achieving the projected rent, accurate cost estimates, and market conditions. Always verify rental values with local agents and research all potential costs before investing.",
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
            Common questions about rental yields and property investment in the UK.
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
