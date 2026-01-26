import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I calculate the area of a room in square metres?",
    answer:
      "To calculate room area in square metres, simply multiply the length by the width. For example, a room that is 5 metres long and 4 metres wide has an area of 20 square metres (5 × 4 = 20 m²). Our calculator does this automatically for each room you add.",
  },
  {
    question: "What's the difference between square metres and square feet?",
    answer:
      "Square metres (m²) and square feet (sq ft) are both units of area measurement. 1 square metre equals approximately 10.764 square feet. In the UK, both measurements are commonly used - square metres for official purposes and square feet in property marketing, especially in London.",
  },
  {
    question: "What areas should I include when measuring my property?",
    answer:
      "Include all internal habitable spaces measured at floor level: living rooms, bedrooms, kitchens, bathrooms, hallways, and landings. Exclude external areas like garages, balconies, patios, and outbuildings. Stairs should be measured at ground floor level only.",
  },
  {
    question: "How accurate are the property value estimates?",
    answer:
      "Our value estimates are based on average UK and London prices per square foot and should be used as a rough guide only. Actual property values depend on many factors including location, condition, local market conditions, and property features. For accurate valuations, consult a qualified surveyor or estate agent.",
  },
  {
    question: "What is Gross Internal Area (GIA)?",
    answer:
      "Gross Internal Area (GIA) is the total floor area measured to the internal face of external walls. It includes circulation areas (hallways, landings), internal walls, and built-in storage. GIA is the standard measurement used by RICS (Royal Institution of Chartered Surveyors) for property valuations.",
  },
  {
    question: "How do I measure rooms with irregular shapes?",
    answer:
      "For irregular rooms, divide them into rectangular sections. Measure each section separately and add the areas together. For L-shaped rooms, measure as two rectangles. For rooms with bay windows, include the bay area by measuring from the main wall to the window.",
  },
  {
    question: "Why do estate agents use different measurements?",
    answer:
      "Estate agents in the UK often use square feet in marketing materials because it produces larger numbers that can appear more impressive. However, official documents and surveys typically use square metres. Our calculator provides both measurements for convenience.",
  },
  {
    question: "What tools do I need to measure my property?",
    answer:
      "A laser distance measure provides the most accurate results and is easy to use. Alternatively, a traditional tape measure works well for smaller spaces. Make sure to measure at floor level, wall to wall, and note any alcoves or recesses that need separate measurements.",
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
            Everything you need to know about measuring property areas and using our calculator.
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
