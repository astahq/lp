import { useState } from "react";
import { Button } from "@/components/ui/button";
import uploadLegalPackImg from "@/assets/upload-legal-pack.png";
import aiAnalysisImg from "@/assets/ai-analysis.png";
import riskReportImg from "@/assets/risk-report.png";

const features = [{
  id: "upload",
  title: "Upload Legal Pack",
  description: "Just drag & drop the entire auction pack (PDFs, Word, scans – doesn't matter).",
  image: uploadLegalPackImg
}, {
  id: "analysis",
  title: "AI Analysis",
  description: "Asta scans every document, identifying risks, covenants, and key clauses.",
  image: aiAnalysisImg
}, {
  id: "report",
  title: "Get Risk Report",
  description: "Clear \"Proceed / Walk Away\" recommendation and exact risk locations.",
  image: riskReportImg
}];
const Features = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const activeFeature = features.find(f => f.id === activeTab);
  return <section id="solutions" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-label mb-3 block">FEATURES</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Save your money and time bidding on property!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={feature.id} className="flex flex-col items-center gap-2">
              <span className="text-xs font-semibold text-primary tracking-wider">
                STEP {index + 1}
              </span>
              <button 
                onClick={() => setActiveTab(feature.id)} 
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === feature.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
              >
                {feature.title}
              </button>
            </div>
          ))}
        </div>

        {/* Content */}
        {activeFeature && <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                {activeFeature.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {activeFeature.description}
              </p>
              <Button variant="link" className="p-0 h-auto text-primary font-medium" asChild>
                <a href="https://app.useasta.com/auth" target="_blank" rel="noopener noreferrer">
                  Upload Your Legal Pack →
                </a>
              </Button>
            </div>
            <div className="bg-muted rounded-2xl overflow-hidden shadow-lg border border-border">
              <img 
                src={activeFeature.image} 
                alt={activeFeature.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>}

        <div className="mt-12 text-center">
          <Button className="h-12 rounded-lg px-8 text-sm font-medium" asChild>
            <a href="https://app.useasta.com/auth" target="_blank" rel="noopener noreferrer">
              Get Started for Free
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default Features;