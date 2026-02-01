import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Calculator, TrendingUp } from "lucide-react";

const ROICalculator = () => {
  const [casesPerMonth, setCasesPerMonth] = useState(100);
  const [hoursPerReview, setHoursPerReview] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(50);

  const getAstaCost = (cases: number) => {
    if (cases <= 100) return 99;
    if (cases <= 300) return 249;

    return 249 + Math.ceil((cases - 300) / 100) * 75;
  };

  const currentMonthlyCost = casesPerMonth * hoursPerReview * hourlyRate;
  const costWithAsta = getAstaCost(casesPerMonth);
  const monthlySavings = Math.max(0, currentMonthlyCost - costWithAsta);
  const annualSavings = monthlySavings * 12;

  const getRecommendedPlan = (cases: number) => {
    if (cases <= 100) return "Starter";
    if (cases <= 300) return "Professional";
    return "Enterprise";
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-label mb-3 block">ROI CALCULATOR</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Calculate Your Monthly Savings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how much time and money your firm could save with AI-powered
            document analysis.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Your Current Workload
                </h3>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-foreground">
                    Cases per month
                  </label>
                  <span className="text-lg font-semibold text-primary">
                    {casesPerMonth}
                  </span>
                </div>
                <Slider
                  value={[casesPerMonth]}
                  onValueChange={(value) => setCasesPerMonth(value[0])}
                  min={0}
                  max={500}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0</span>
                  <span>500</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-foreground">
                    Hours per review
                  </label>
                  <span className="text-lg font-semibold text-primary">
                    {hoursPerReview}h
                  </span>
                </div>
                <Slider
                  value={[hoursPerReview]}
                  onValueChange={(value) => setHoursPerReview(value[0])}
                  min={1}
                  max={5}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1h</span>
                  <span>5h</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Hourly rate (£)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    £
                  </span>
                  <Input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) =>
                      setHourlyRate(Math.max(0, parseInt(e.target.value) || 0))
                    }
                    className="pl-8 h-12 text-lg"
                    min={0}
                    max={500}
                  />
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Your Potential Savings
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-muted-foreground">
                    Current monthly cost
                  </span>
                  <span className="text-xl font-semibold text-foreground">
                    {formatCurrency(currentMonthlyCost)}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <div>
                    <span className="text-muted-foreground">
                      Cost with Asta
                    </span>
                    <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      {getRecommendedPlan(casesPerMonth)}
                    </span>
                  </div>
                  <span className="text-xl font-semibold text-foreground">
                    {formatCurrency(costWithAsta)}/mo
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-muted-foreground">Monthly savings</span>
                  <span className="text-2xl font-bold text-primary">
                    {formatCurrency(monthlySavings)}
                  </span>
                </div>

                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-medium">
                      Annual savings
                    </span>
                    <span className="text-3xl font-bold text-primary">
                      {formatCurrency(annualSavings)}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                className="w-full h-12 mt-8 text-base font-medium"
                asChild
              >
                <a
                  href="https://app.useasta.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Saving Today
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
