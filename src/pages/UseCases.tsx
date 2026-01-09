import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Building2, Users, Briefcase } from "lucide-react";

const useCases = [
  {
    icon: Users,
    title: "Individual Investors",
    description: "First-time or experienced property investors looking to make informed decisions at auction.",
    benefits: [
      "Avoid costly mistakes on your first auction purchase",
      "Understand complex legal documents without hiring a solicitor upfront",
      "Get instant insights before the auction deadline",
      "Make confident bids with full knowledge of risks"
    ]
  },
  {
    icon: Building2,
    title: "Property Developers",
    description: "Professional developers managing multiple auction opportunities simultaneously.",
    benefits: [
      "Analyse multiple properties quickly and efficiently",
      "Standardised risk assessment across your portfolio",
      "Identify hidden costs that affect your development margins",
      "Speed up due diligence without sacrificing quality"
    ]
  },
  {
    icon: Briefcase,
    title: "Property Investment Companies",
    description: "Institutional buyers and investment firms with high-volume auction activity.",
    benefits: [
      "Scale your auction analysis capacity",
      "Consistent risk evaluation across your team",
      "Enterprise-grade security for sensitive documents",
      "Custom integrations with your existing workflows"
    ]
  }
];

const UseCases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who Uses Asta?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From first-time investors to property professionals, Asta helps everyone make smarter auction decisions.
          </p>
        </section>

        {/* Use Cases Grid */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div 
                key={useCase.title}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-3">
                  {useCase.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Upload your first legal pack and see how Asta can help you make smarter auction decisions.
            </p>
            <Button size="lg" className="rounded-lg px-8" asChild>
              <a href="https://app.useasta.com/auth" target="_blank" rel="noopener noreferrer">
                Try Asta for Free
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UseCases;
