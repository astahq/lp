import uncoverFeesImg from "@/assets/uncover-hidden-fees.jpg";
import riskyConditionsImg from "@/assets/spot-risky-special-conditions.jpg";
import penaltiesImg from "@/assets/avoid-costly-completion-penalties.jpg";
import auctionsImg from "@/assets/track-upcoming-auctions.jpg";

const steps = [
  {
    image: uncoverFeesImg,
    title: "Uncover hidden fees",
    description:
      "Identify outstanding charges, legal fees, and financial liabilities buried in the legal pack before you bid.",
  },
  {
    image: riskyConditionsImg,
    title: "Spot risky special conditions",
    description:
      "Asta highlights unusual clauses and amendments that could limit your rights or increase your costs after purchase.",
  },
  {
    image: penaltiesImg,
    title: "Avoid costly completion penalties",
    description:
      "See deadlines, penalty clauses, and completion risks that could cost you thousands if missed.",
  },
  {
    image: auctionsImg,
    title: "Track upcoming auctions in the UK.",
    description:
      "Keep all your auction dates, lots, and bidding activity organised in one place.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-label mb-3 block">HOW IT WORKS</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Save your money and time bidding on property!
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-xl overflow-hidden border border-border h-full">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
