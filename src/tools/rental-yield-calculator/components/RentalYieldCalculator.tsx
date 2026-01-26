import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, PoundSterling, Home, Percent } from "lucide-react";

const RentalYieldCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(250000);
  const [monthlyRent, setMonthlyRent] = useState(1200);
  const [annualCosts, setAnnualCosts] = useState(2400);
  const [voidWeeks, setVoidWeeks] = useState(2);

  const calculations = useMemo(() => {
    const weeksOccupied = 52 - voidWeeks;
    const annualRent = (monthlyRent * 12 * weeksOccupied) / 52;
    
    const grossYield = (annualRent / propertyValue) * 100;
    
    const netAnnualIncome = annualRent - annualCosts;
    const netYield = (netAnnualIncome / propertyValue) * 100;
    
    const monthlyCashFlow = netAnnualIncome / 12;
    
    const deposit = propertyValue * 0.25;
    const cashOnCashReturn = (netAnnualIncome / deposit) * 100;

    return {
      annualRent,
      grossYield: isNaN(grossYield) ? 0 : grossYield,
      netAnnualIncome: isNaN(netAnnualIncome) ? 0 : netAnnualIncome,
      netYield: isNaN(netYield) ? 0 : netYield,
      monthlyCashFlow: isNaN(monthlyCashFlow) ? 0 : monthlyCashFlow,
      cashOnCashReturn: isNaN(cashOnCashReturn) ? 0 : cashOnCashReturn,
      deposit,
    };
  }, [propertyValue, monthlyRent, annualCosts, voidWeeks]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Card className="border border-border shadow-sm">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-2.5 text-base font-semibold text-foreground">
            <Calculator className="h-5 w-5 text-primary" />
            Calculator Inputs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-7">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="propertyValue" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="text-primary">£</span>
                Property Value
              </Label>
              <span className="text-base font-semibold text-primary">{formatCurrency(propertyValue)}</span>
            </div>
            <Slider
              value={[propertyValue]}
              onValueChange={(value) => setPropertyValue(value[0])}
              min={50000}
              max={2000000}
              step={5000}
              className="[&_[data-slot=slider-range]]:bg-primary [&_[data-slot=slider-thumb]]:border-primary [&_[data-slot=slider-thumb]]:bg-card"
            />
            <Input
              id="propertyValue"
              type="number"
              value={propertyValue}
              onChange={(e) => setPropertyValue(Number(e.target.value))}
              className="h-11 border-border bg-muted/50 text-foreground"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="monthlyRent" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="text-primary">£</span>
                Monthly Rent
              </Label>
              <span className="text-base font-semibold text-primary">{formatCurrency(monthlyRent)}</span>
            </div>
            <Slider
              value={[monthlyRent]}
              onValueChange={(value) => setMonthlyRent(value[0])}
              min={200}
              max={5000}
              step={50}
              className="[&_[data-slot=slider-range]]:bg-primary [&_[data-slot=slider-thumb]]:border-primary [&_[data-slot=slider-thumb]]:bg-card"
            />
            <Input
              id="monthlyRent"
              type="number"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(Number(e.target.value))}
              className="h-11 border-border bg-muted/50 text-foreground"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="annualCosts" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="text-primary">£</span>
                Annual Running Costs
              </Label>
              <span className="text-base font-semibold text-primary">{formatCurrency(annualCosts)}</span>
            </div>
            <Slider
              value={[annualCosts]}
              onValueChange={(value) => setAnnualCosts(value[0])}
              min={0}
              max={15000}
              step={100}
              className="[&_[data-slot=slider-range]]:bg-primary [&_[data-slot=slider-thumb]]:border-primary [&_[data-slot=slider-thumb]]:bg-card"
            />
            <Input
              id="annualCosts"
              type="number"
              value={annualCosts}
              onChange={(e) => setAnnualCosts(Number(e.target.value))}
              className="h-11 border-border bg-muted/50 text-foreground"
            />
            <p className="text-xs text-muted-foreground">
              Include: management fees, maintenance, insurance, service charges, etc.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="voidWeeks" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Percent className="h-4 w-4 text-primary" />
                Void Period
              </Label>
              <span className="text-base font-semibold text-primary">{voidWeeks} weeks/year</span>
            </div>
            <Slider
              value={[voidWeeks]}
              onValueChange={(value) => setVoidWeeks(value[0])}
              min={0}
              max={12}
              step={1}
              className="[&_[data-slot=slider-range]]:bg-primary [&_[data-slot=slider-thumb]]:border-primary [&_[data-slot=slider-thumb]]:bg-card"
            />
            <p className="text-xs text-muted-foreground">
              Average time the property may be empty between tenants
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border shadow-sm">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-2.5 text-base font-semibold text-foreground">
            <PoundSterling className="h-5 w-5 text-primary" />
            Your Rental Yield
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="rounded-xl bg-secondary px-6 py-5 text-center">
            <p className="mb-1 text-sm text-muted-foreground">Gross Rental Yield</p>
            <p className="text-4xl font-bold text-primary">
              {formatPercent(calculations.grossYield)}
            </p>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-accent px-5 py-4">
            <div>
              <p className="text-sm font-medium text-accent-foreground">
                Net Rental Yield
              </p>
              <p className="text-xs text-accent-foreground/80">
                After running costs & void periods
              </p>
            </div>
            <p className="text-xl font-bold text-accent-foreground">
              {formatPercent(calculations.netYield)}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-border bg-card px-4 py-3.5 text-center">
              <p className="mb-0.5 text-xs text-muted-foreground">Annual Rent</p>
              <p className="text-lg font-semibold text-foreground">
                {formatCurrency(calculations.annualRent)}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card px-4 py-3.5 text-center">
              <p className="mb-0.5 text-xs text-muted-foreground">Net Annual Income</p>
              <p className="text-lg font-semibold text-foreground">
                {formatCurrency(calculations.netAnnualIncome)}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card px-4 py-3.5 text-center">
              <p className="mb-0.5 text-xs text-muted-foreground">Monthly Cash Flow</p>
              <p className="text-lg font-semibold text-foreground">
                {formatCurrency(calculations.monthlyCashFlow)}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card px-4 py-3.5 text-center">
              <p className="mb-0.5 text-xs text-muted-foreground">Cash-on-Cash Return</p>
              <p className="text-lg font-semibold text-foreground">
                {formatPercent(calculations.cashOnCashReturn)}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-border pt-4">
            <div>
              <p className="text-sm font-medium text-foreground">
                Assumed Deposit (25%)
              </p>
              <p className="text-xs text-muted-foreground">
                Cash-on-cash return is calculated based on a 25% deposit
              </p>
            </div>
            <p className="text-xl font-bold text-foreground">
              {formatCurrency(calculations.deposit)}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RentalYieldCalculator;
