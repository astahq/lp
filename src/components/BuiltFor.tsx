import { Building2, Scale, Search } from "lucide-react";

const professionals = [
  {
    icon: Building2,
    title: "Property Investors",
    description: "Make faster, smarter bidding decisions with instant legal pack insights.",
  },
  {
    icon: Scale,
    title: "Solicitors",
    description: "Streamline due diligence and deliver faster turnaround for clients.",
  },
  {
    icon: Search,
    title: "Property Sourcers",
    description: "Quickly assess deals and present risk summaries to investors.",
  },
];

const BuiltFor = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Built for every professional
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {professionals.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltFor;
