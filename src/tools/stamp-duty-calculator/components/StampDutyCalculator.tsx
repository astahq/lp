import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator, PoundSterling, Home, Building2 } from "lucide-react";

type BuyerType = "additional" | "first-time" | "home-mover";
type Region = "england" | "scotland" | "wales";

const StampDutyCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(300000);
  const [buyerType, setBuyerType] = useState<BuyerType>("first-time");
  const [region, setRegion] = useState<Region>("england");

  const calculations = useMemo(() => {
    let stampDuty = 0;
    let breakdown: { band: string; rate: string; amount: number }[] = [];

    if (region === "england") {
      if (buyerType === "first-time") {
        if (propertyValue <= 425000) {
          stampDuty = 0;
          breakdown = [{ band: "Up to £425,000", rate: "0%", amount: 0 }];
        } else if (propertyValue <= 625000) {
          stampDuty = (propertyValue - 425000) * 0.05;
          breakdown = [
            { band: "Up to £425,000", rate: "0%", amount: 0 },
            { band: "£425,001 - £625,000", rate: "5%", amount: (propertyValue - 425000) * 0.05 },
          ];
        } else {
          const band1 = 0;
          const band2 = Math.min(Math.max(propertyValue - 250000, 0), 675000) * 0.05;
          const band3 = Math.min(Math.max(propertyValue - 925000, 0), 575000) * 0.10;
          const band4 = Math.max(propertyValue - 1500000, 0) * 0.12;
          stampDuty = band1 + band2 + band3 + band4;
          breakdown = [
            { band: "Up to £250,000", rate: "0%", amount: 0 },
            { band: "£250,001 - £925,000", rate: "5%", amount: band2 },
            { band: "£925,001 - £1,500,000", rate: "10%", amount: band3 },
            { band: "Over £1,500,000", rate: "12%", amount: band4 },
          ].filter(b => b.amount > 0 || b.band === "Up to £250,000");
        }
      } else if (buyerType === "home-mover") {
        const band1 = 0;
        const band2 = Math.min(Math.max(propertyValue - 250000, 0), 675000) * 0.05;
        const band3 = Math.min(Math.max(propertyValue - 925000, 0), 575000) * 0.10;
        const band4 = Math.max(propertyValue - 1500000, 0) * 0.12;
        stampDuty = band1 + band2 + band3 + band4;
        breakdown = [
          { band: "Up to £250,000", rate: "0%", amount: 0 },
          { band: "£250,001 - £925,000", rate: "5%", amount: band2 },
          { band: "£925,001 - £1,500,000", rate: "10%", amount: band3 },
          { band: "Over £1,500,000", rate: "12%", amount: band4 },
        ].filter(b => b.amount > 0 || b.band === "Up to £250,000");
      } else {
        const band1 = Math.min(propertyValue, 250000) * 0.05;
        const band2 = Math.min(Math.max(propertyValue - 250000, 0), 675000) * 0.10;
        const band3 = Math.min(Math.max(propertyValue - 925000, 0), 575000) * 0.15;
        const band4 = Math.max(propertyValue - 1500000, 0) * 0.17;
        stampDuty = band1 + band2 + band3 + band4;
        breakdown = [
          { band: "Up to £250,000", rate: "5%", amount: band1 },
          { band: "£250,001 - £925,000", rate: "10%", amount: band2 },
          { band: "£925,001 - £1,500,000", rate: "15%", amount: band3 },
          { band: "Over £1,500,000", rate: "17%", amount: band4 },
        ].filter(b => b.amount > 0);
      }
    } else if (region === "scotland") {
      if (buyerType === "additional") {
        const band1 = Math.min(propertyValue, 145000) * 0.06;
        const band2 = Math.min(Math.max(propertyValue - 145000, 0), 105000) * 0.08;
        const band3 = Math.min(Math.max(propertyValue - 250000, 0), 75000) * 0.11;
        const band4 = Math.min(Math.max(propertyValue - 325000, 0), 425000) * 0.16;
        const band5 = Math.max(propertyValue - 750000, 0) * 0.18;
        stampDuty = band1 + band2 + band3 + band4 + band5;
        breakdown = [
          { band: "Up to £145,000", rate: "6%", amount: band1 },
          { band: "£145,001 - £250,000", rate: "8%", amount: band2 },
          { band: "£250,001 - £325,000", rate: "11%", amount: band3 },
          { band: "£325,001 - £750,000", rate: "16%", amount: band4 },
          { band: "Over £750,000", rate: "18%", amount: band5 },
        ].filter(b => b.amount > 0);
      } else {
        const band1 = 0;
        const band2 = Math.min(Math.max(propertyValue - 145000, 0), 105000) * 0.02;
        const band3 = Math.min(Math.max(propertyValue - 250000, 0), 75000) * 0.05;
        const band4 = Math.min(Math.max(propertyValue - 325000, 0), 425000) * 0.10;
        const band5 = Math.max(propertyValue - 750000, 0) * 0.12;
        stampDuty = band1 + band2 + band3 + band4 + band5;
        breakdown = [
          { band: "Up to £145,000", rate: "0%", amount: 0 },
          { band: "£145,001 - £250,000", rate: "2%", amount: band2 },
          { band: "£250,001 - £325,000", rate: "5%", amount: band3 },
          { band: "£325,001 - £750,000", rate: "10%", amount: band4 },
          { band: "Over £750,000", rate: "12%", amount: band5 },
        ].filter(b => b.amount > 0 || b.band === "Up to £145,000");
      }
    } else {
      if (buyerType === "additional") {
        const band1 = Math.min(propertyValue, 180000) * 0.04;
        const band2 = Math.min(Math.max(propertyValue - 180000, 0), 70000) * 0.075;
        const band3 = Math.min(Math.max(propertyValue - 250000, 0), 150000) * 0.09;
        const band4 = Math.min(Math.max(propertyValue - 400000, 0), 350000) * 0.115;
        const band5 = Math.min(Math.max(propertyValue - 750000, 0), 750000) * 0.14;
        const band6 = Math.max(propertyValue - 1500000, 0) * 0.16;
        stampDuty = band1 + band2 + band3 + band4 + band5 + band6;
        breakdown = [
          { band: "Up to £180,000", rate: "4%", amount: band1 },
          { band: "£180,001 - £250,000", rate: "7.5%", amount: band2 },
          { band: "£250,001 - £400,000", rate: "9%", amount: band3 },
          { band: "£400,001 - £750,000", rate: "11.5%", amount: band4 },
          { band: "£750,001 - £1,500,000", rate: "14%", amount: band5 },
          { band: "Over £1,500,000", rate: "16%", amount: band6 },
        ].filter(b => b.amount > 0);
      } else {
        const band1 = 0;
        const band2 = Math.min(Math.max(propertyValue - 225000, 0), 175000) * 0.06;
        const band3 = Math.min(Math.max(propertyValue - 400000, 0), 350000) * 0.075;
        const band4 = Math.min(Math.max(propertyValue - 750000, 0), 750000) * 0.10;
        const band5 = Math.max(propertyValue - 1500000, 0) * 0.12;
        stampDuty = band1 + band2 + band3 + band4 + band5;
        breakdown = [
          { band: "Up to £225,000", rate: "0%", amount: 0 },
          { band: "£225,001 - £400,000", rate: "6%", amount: band2 },
          { band: "£400,001 - £750,000", rate: "7.5%", amount: band3 },
          { band: "£750,001 - £1,500,000", rate: "10%", amount: band4 },
          { band: "Over £1,500,000", rate: "12%", amount: band5 },
        ].filter(b => b.amount > 0 || b.band === "Up to £225,000");
      }
    }

    const effectiveRate = propertyValue > 0 ? (stampDuty / propertyValue) * 100 : 0;

    return {
      stampDuty,
      effectiveRate: effectiveRate.toFixed(2),
      breakdown,
    };
  }, [propertyValue, buyerType, region]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getTaxName = () => {
    if (region === "scotland") return "LBTT";
    if (region === "wales") return "LTT";
    return "Stamp Duty";
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
            <Label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Home className="h-4 w-4 text-primary" />
              Buyer Type
            </Label>
            <RadioGroup
              value={buyerType}
              onValueChange={(value) => setBuyerType(value as BuyerType)}
              className="grid gap-3"
            >
              <div className="flex items-center space-x-3 rounded-lg border border-border p-4 hover:bg-neutral-100 transition-colors">
                <RadioGroupItem value="first-time" id="first-time" />
                <Label htmlFor="first-time" className="flex-1 cursor-pointer">
                  <span className="font-medium">First-time Buyer</span>
                  <p className="text-sm text-muted-foreground">Buying your first home</p>
                </Label>
              </div>
              <div className="flex items-center space-x-3 rounded-lg border border-border p-4 hover:bg-neutral-100 transition-colors">
                <RadioGroupItem value="home-mover" id="home-mover" />
                <Label htmlFor="home-mover" className="flex-1 cursor-pointer">
                  <span className="font-medium">Home Mover</span>
                  <p className="text-sm text-muted-foreground">Moving to a new main residence</p>
                </Label>
              </div>
              <div className="flex items-center space-x-3 rounded-lg border border-border p-4 hover:bg-neutral-100 transition-colors">
                <RadioGroupItem value="additional" id="additional" />
                <Label htmlFor="additional" className="flex-1 cursor-pointer">
                  <span className="font-medium">Additional Property</span>
                  <p className="text-sm text-muted-foreground">Buy-to-let or second home</p>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Building2 className="h-4 w-4 text-primary" />
              Property Location
            </Label>
            <RadioGroup
              value={region}
              onValueChange={(value) => setRegion(value as Region)}
              className="grid grid-cols-3 gap-3"
            >
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-border p-4 hover:bg-neutral-100 transition-colors">
                <RadioGroupItem value="england" id="england" />
                <Label htmlFor="england" className="cursor-pointer text-center">
                  <span className="font-medium text-sm">England & NI</span>
                </Label>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-border p-4 hover:bg-neutral-100 transition-colors">
                <RadioGroupItem value="scotland" id="scotland" />
                <Label htmlFor="scotland" className="cursor-pointer text-center">
                  <span className="font-medium text-sm">Scotland</span>
                </Label>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-border p-4 hover:bg-neutral-100 transition-colors">
                <RadioGroupItem value="wales" id="wales" />
                <Label htmlFor="wales" className="cursor-pointer text-center">
                  <span className="font-medium text-sm">Wales</span>
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border shadow-sm">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-2.5 text-base font-semibold text-foreground">
            <PoundSterling className="h-5 w-5 text-primary" />
            Your {getTaxName()} Results
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="rounded-xl bg-secondary px-6 py-5 text-center">
            <p className="mb-1 text-sm text-muted-foreground">{getTaxName()} to Pay</p>
            <p className="text-4xl font-bold text-primary">
              {formatCurrency(calculations.stampDuty)}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Effective rate: {calculations.effectiveRate}%
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-medium text-foreground text-sm">Tax Breakdown</p>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium">Band</th>
                    <th className="px-4 py-2 text-center font-medium">Rate</th>
                    <th className="px-4 py-2 text-right font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {calculations.breakdown.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">{item.band}</td>
                      <td className="px-4 py-2 text-center font-mono">{item.rate}</td>
                      <td className="px-4 py-2 text-right font-mono">{formatCurrency(item.amount)}</td>
                    </tr>
                  ))}
                  <tr className="bg-muted/30 font-semibold">
                    <td className="px-4 py-2" colSpan={2}>Total</td>
                    <td className="px-4 py-2 text-right font-mono">{formatCurrency(calculations.stampDuty)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-accent px-5 py-4">
            <div>
              <p className="text-sm font-medium text-accent-foreground">
                {buyerType === "first-time" && region === "england" && (
                  <>First-time buyers pay no stamp duty on properties up to £425,000, and reduced rates up to £625,000.</>
                )}
                {buyerType === "home-mover" && region === "england" && (
                  <>Standard stamp duty rates apply. No tax on the first £250,000 of the property value.</>
                )}
                {buyerType === "additional" && region === "england" && (
                  <>Additional property surcharge of 5% applies on top of standard rates from the first pound.</>
                )}
                {region === "scotland" && (
                  <>Scotland uses Land and Buildings Transaction Tax (LBTT) with different thresholds and rates.</>
                )}
                {region === "wales" && (
                  <>Wales uses Land Transaction Tax (LTT) with different thresholds and rates.</>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-border pt-4">
            <div>
              <p className="text-sm font-medium text-foreground">
                Total Purchase Cost
              </p>
              <p className="text-xs text-muted-foreground">
                Property price + {getTaxName()} (excluding legal fees)
              </p>
            </div>
            <p className="text-xl font-bold text-foreground">
              {formatCurrency(propertyValue + calculations.stampDuty)}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StampDutyCalculator;
