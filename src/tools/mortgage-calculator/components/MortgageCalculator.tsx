import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, PoundSterling, Percent, Clock } from "lucide-react";

const MortgageCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(250000);
  const [deposit, setDeposit] = useState(62500);
  const [interestRate, setInterestRate] = useState(5.5);
  const [term, setTerm] = useState(25);

  const calculations = useMemo(() => {
    const loanAmount = propertyValue - deposit;
    const ltv = (loanAmount / propertyValue) * 100;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = term * 12;
    
    const monthlyPayment = 
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPayable = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayable - loanAmount;
    
    let stampDuty = 0;
    if (propertyValue <= 250000) {
      stampDuty = propertyValue * 0.05;
    } else if (propertyValue <= 925000) {
      stampDuty = 250000 * 0.05 + (propertyValue - 250000) * 0.1;
    } else if (propertyValue <= 1500000) {
      stampDuty = 250000 * 0.05 + 675000 * 0.1 + (propertyValue - 925000) * 0.15;
    } else {
      stampDuty = 250000 * 0.05 + 675000 * 0.1 + 575000 * 0.15 + (propertyValue - 1500000) * 0.17;
    }

    return {
      loanAmount,
      ltv: ltv.toFixed(1),
      monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
      totalPayable: isNaN(totalPayable) ? 0 : totalPayable,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
      stampDuty,
    };
  }, [propertyValue, deposit, interestRate, term]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const depositPercentage = ((deposit / propertyValue) * 100).toFixed(0);

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
              onValueChange={(value) => {
                setPropertyValue(value[0]);
                setDeposit(Math.min(deposit, value[0] * 0.75));
              }}
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
              <Label htmlFor="deposit" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="text-primary">£</span>
                Deposit ({depositPercentage}%)
              </Label>
              <span className="text-base font-semibold text-primary">{formatCurrency(deposit)}</span>
            </div>
            <Slider
              value={[deposit]}
              onValueChange={(value) => setDeposit(value[0])}
              min={propertyValue * 0.25}
              max={propertyValue * 0.75}
              step={1000}
              className="[&_[data-slot=slider-range]]:bg-primary [&_[data-slot=slider-thumb]]:border-primary [&_[data-slot=slider-thumb]]:bg-card"
            />
            <Input
              id="deposit"
              type="number"
              value={deposit}
              onChange={(e) => setDeposit(Number(e.target.value))}
              className="h-11 border-border bg-muted/50 text-foreground"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="interestRate" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Percent className="h-4 w-4 text-primary" />
                Interest Rate
              </Label>
              <span className="text-base font-semibold text-primary">{interestRate.toFixed(1)}%</span>
            </div>
            <Slider
              value={[interestRate * 10]}
              onValueChange={(value) => setInterestRate(value[0] / 10)}
              min={10}
              max={100}
              step={1}
              className="[&_[data-slot=slider-range]]:bg-primary [&_[data-slot=slider-thumb]]:border-primary [&_[data-slot=slider-thumb]]:bg-card"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="term" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Clock className="h-4 w-4 text-primary" />
                Mortgage Term
              </Label>
              <span className="text-base font-semibold text-primary">{term} years</span>
            </div>
            <Slider
              value={[term]}
              onValueChange={(value) => setTerm(value[0])}
              min={5}
              max={40}
              step={1}
              className="[&_[data-slot=slider-range]]:bg-primary [&_[data-slot=slider-thumb]]:border-primary [&_[data-slot=slider-thumb]]:bg-card"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border shadow-sm">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-2.5 text-base font-semibold text-foreground">
            <PoundSterling className="h-5 w-5 text-primary" />
            Your Results
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="rounded-xl bg-secondary px-6 py-5 text-center">
            <p className="mb-1 text-sm text-muted-foreground">Monthly Payment</p>
            <p className="text-4xl font-bold text-primary">
              {formatCurrency(Math.round(calculations.monthlyPayment))}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-border bg-card px-4 py-3.5 text-center">
              <p className="mb-0.5 text-xs text-muted-foreground">Loan Amount</p>
              <p className="text-lg font-semibold text-foreground">
                {formatCurrency(calculations.loanAmount)}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card px-4 py-3.5 text-center">
              <p className="mb-0.5 text-xs text-muted-foreground">LTV Ratio</p>
              <p className="text-lg font-semibold text-foreground">
                {calculations.ltv}%
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card px-4 py-3.5 text-center">
              <p className="mb-0.5 text-xs text-muted-foreground">Total Interest</p>
              <p className="text-lg font-semibold text-foreground">
                {formatCurrency(Math.round(calculations.totalInterest))}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card px-4 py-3.5 text-center">
              <p className="mb-0.5 text-xs text-muted-foreground">Total Repayable</p>
              <p className="text-lg font-semibold text-foreground">
                {formatCurrency(Math.round(calculations.totalPayable))}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-accent px-5 py-4">
            <div>
              <p className="text-sm font-medium text-accent-foreground">
                Stamp Duty (Additional Property)
              </p>
              <p className="text-xs text-accent-foreground/80">
                England & Northern Ireland rates
              </p>
            </div>
            <p className="text-xl font-bold text-accent-foreground">
              {formatCurrency(calculations.stampDuty)}
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-border pt-4">
            <div>
              <p className="text-sm font-medium text-foreground">
                Total Initial Investment
              </p>
              <p className="text-xs text-muted-foreground">
                Deposit + Stamp Duty (excluding legal fees)
              </p>
            </div>
            <p className="text-xl font-bold text-foreground">
              {formatCurrency(deposit + calculations.stampDuty)}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MortgageCalculator;
