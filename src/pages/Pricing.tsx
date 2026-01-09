import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingFaqs = [
  {
    question: "How does the Pay-Per-Report pricing work?",
    answer:
      "Each report costs £29 (VAT included). You only pay when you need an analysis - no subscriptions or commitments required. Simply upload your legal pack and receive your comprehensive report within minutes.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards including Visa, Mastercard, and American Express. All payments are processed securely through our payment provider.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "Yes, we offer a satisfaction guarantee. If you're not happy with your report, contact our support team within 7 days of purchase and we'll review your case for a full refund.",
  },
  {
    question: "What's included in the Enterprise plan?",
    answer:
      "The Enterprise plan includes bulk analysis capabilities, team dashboards, API access, custom integrations, and priority support. Pricing is tailored based on your volume and specific needs.",
  },
  {
    question: "How do I get started with the Enterprise plan?",
    answer:
      "Book a demo with our team and we'll discuss your requirements, provide a custom quote, and help you get set up with a dedicated onboarding process.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Absolutely. We use industry-standard encryption and never store your full payment details on our servers. All transactions are PCI-DSS compliant.",
  },
];

const Pricing = () => {
  const payPerReportFeatures = [
    "One-time detailed legal pack analysis",
    "Summary with key risks and red flags",
    "Downloadable PDF Report",
    "Property-specific chatbot for follow-up questions",
    "Mail Support",
  ];

  const enterpriseFeatures = [
    "Bulk legal pack analysis",
    "Team dashboard and report sharing",
    "API access and workflow integrations",
    "Custom integrations",
    "Priority support",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pay-Per-Report Plan */}
            <Card className="relative border-2 border-border bg-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Pay-Per-Report
                </CardTitle>
                <p className="text-muted-foreground text-sm mt-2">
                  Perfect for individual investors who want instant insights before bidding.
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">£29</span>
                  <span className="text-muted-foreground ml-2">(VAT Included)</span>
                </div>

                <div className="mb-8">
                  <p className="text-sm font-medium text-foreground mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {payPerReportFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full h-12 rounded-lg text-sm font-medium">
                  Get Started for Free
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative border-2 border-primary bg-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Enterprise
                </CardTitle>
                <p className="text-muted-foreground text-sm mt-2">
                  Ideal for solicitors, auction houses, property management companies, and high-volume investors needing tailored access.
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">Custom Pricing</span>
                </div>

                <div className="mb-8">
                  <p className="text-sm font-medium text-foreground mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {enterpriseFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full h-12 rounded-lg text-sm font-medium">
                  Book a Demo
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <section className="mt-24 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label mb-3 block">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about pricing and billing.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {pricingFaqs.map((faq, index) => (
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
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
