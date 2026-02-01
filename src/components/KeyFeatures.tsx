import {
  FileSearch,
  AlertTriangle,
  PenTool,
  List,
  FileText,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "Analyse Leases",
    description:
      "Instantly analyse any lease or group of leases for legal risk using 100% pre-trained artificial intelligence",
  },
  {
    icon: AlertTriangle,
    title: "Extract Key Clauses",
    description:
      "Automatically extract all the key commercial terms you need to report on in just a few clicks",
  },
  {
    icon: PenTool,
    title: "Read Handwriting",
    description:
      "A classic issue for lease dates, now addressed with highly trained, focused handwriting AI models",
  },
  {
    icon: List,
    title: "Talk with Documents",
    description:
      "Chat directly with your property documents. Ask questions and get instant answers with source references",
  },
  {
    icon: FileText,
    title: "Multiple Reports",
    description:
      "Word and Spreadsheet reports for all your lease analysis needs - single asset or portfolio",
  },
  {
    icon: Brain,
    title: "Layered AI + GPT-4",
    description:
      "Layered AI including GPT-4 brings groundbreaking accuracy and abilities to lease review",
  },
];

const KeyFeatures = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M100 0v50M100 50h50M150 50v50M100 50v50M100 100h-50M50 100v50"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="100" cy="50" r="4" fill="currentColor" />
          <circle cx="150" cy="50" r="4" fill="currentColor" />
          <circle cx="150" cy="100" r="4" fill="currentColor" />
          <circle cx="100" cy="100" r="4" fill="currentColor" />
          <circle cx="50" cy="100" r="4" fill="currentColor" />
          <circle cx="50" cy="150" r="4" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M0 100h50M50 100v-50M50 50h50M100 50v50M100 100h50"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="50" cy="100" r="4" fill="currentColor" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
          <circle cx="100" cy="50" r="4" fill="currentColor" />
          <circle cx="100" cy="100" r="4" fill="currentColor" />
          <circle cx="150" cy="100" r="4" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Key Features
            </h2>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-lg">
              Supercharge your real estate team by analysing leases in a few
              seconds using Asta. Generate Key Commercial Terms summaries,
              spreadsheets and more using a simple, quick platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="group">
                  <div className="w-14 h-14 rounded-full bg-background/10 border border-primary-foreground/20 flex items-center justify-center mb-4 group-hover:bg-background/20 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm opacity-80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
