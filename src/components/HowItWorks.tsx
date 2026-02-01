import { FileSearch, AlertTriangle, Scale, Clock } from "lucide-react";

const capabilities = [
  {
    icon: FileSearch,
    title: "Title & Ownership Analysis",
    description:
      "Instantly verify ownership chains, identify restrictions, and flag any title defects that could affect the transaction.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Identification",
    description:
      "Automatically detect unusual clauses, money issue, onerous covenants, and potential liabilities across all documents.",
  },
  {
    icon: Scale,
    title: "Compliance Checks",
    description:
      "Ensure all searches are current, identify missing documents, and verify regulatory compliance.",
  },
  {
    icon: Clock,
    title: "Deadline Tracking",
    description:
      "Extract and highlight critical dates, completion deadlines, and time-sensitive conditions.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-label mb-3 block">CAPABILITIES</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Everything you need to review legal packs efficiently
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Asta analyzes all document types in a conveyancing pack, providing
            comprehensive insights in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
