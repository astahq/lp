import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { FileUp, Brain, FileText, CheckCircle } from "lucide-react";
import uploadLegalPackImg from "@/assets/features-first.jpg";
import aiAnalysisImg from "@/assets/features-second.png";
import riskReportImg from "@/assets/features-third.jpg";

const features = [
  {
    id: "upload",
    title: "Upload Property Documents",
    description:
      "Drag and drop entire property documents — PDFs, Word docs, scanned documents. Asta handles Title Deeds, Leases, Searches, Contracts, and more.",
    image: uploadLegalPackImg,
    icon: FileUp,
  },
  {
    id: "analysis",
    title: "AI-Powered Analysis",
    description:
      "Our AI reviews all documents simultaneously, cross-referencing clauses and identifying discrepancies across the entire pack.",
    image: aiAnalysisImg,
    icon: Brain,
  },
  {
    id: "report",
    title: "Comprehensive Report",
    description:
      "Receive a detailed risk assessment with flagged issues, their exact locations, and actionable recommendations for your client.",
    image: riskReportImg,
    icon: FileText,
  },
];

const CYCLE_INTERVAL = 4000;

const Features = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [isPaused, setIsPaused] = useState(false);
  const activeFeature = features.find((f) => f.id === activeTab);

  const cycleToNext = useCallback(() => {
    const currentIndex = features.findIndex((f) => f.id === activeTab);
    const nextIndex = (currentIndex + 1) % features.length;
    setActiveTab(features[nextIndex].id);
  }, [activeTab]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(cycleToNext, CYCLE_INTERVAL);
    return () => clearInterval(interval);
  }, [cycleToNext, isPaused]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section id="solutions" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-label mb-3 block">HOW IT WORKS</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            From upload to insight in 3 simple steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Streamline your conveyancing workflow with AI-powered document
            analysis
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => handleTabClick(feature.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all border ${
                  activeTab === feature.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-background/20 flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </span>
                <Icon className="w-4 h-4" />
                {feature.title}
              </button>
            );
          })}
        </div>

        {/* Content */}
        {activeFeature && (
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <activeFeature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                  {activeFeature.title}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {activeFeature.description}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Supports all common document formats
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Secure, encrypted document handling
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  GDPR compliant processing
                </li>
              </ul>
              <Button className="rounded-lg px-6" asChild>
                <a
                  href="https://app.useasta.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Free Trial →
                </a>
              </Button>
            </div>
            <div className="bg-muted rounded-xl overflow-hidden border border-border">
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
