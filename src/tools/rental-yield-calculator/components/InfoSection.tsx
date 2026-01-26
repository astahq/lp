import { CheckCircle, AlertCircle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InfoSection = () => {
  return (
    <section id="info" className="py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Understanding Rental Yields
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Essential knowledge for property investors evaluating buy-to-let opportunities in the UK.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <CheckCircle className="h-5 w-5 text-primary" />
                Gross vs Net Rental Yield
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">Gross Yield</p>
                    <p className="text-sm text-muted-foreground">Annual rent ÷ Property value × 100. A quick comparison metric, but doesn't show true profit.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">Net Yield</p>
                    <p className="text-sm text-muted-foreground">(Annual rent - Costs) ÷ Property value × 100. The real return after expenses.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">Cash-on-Cash Return</p>
                    <p className="text-sm text-muted-foreground">Net income ÷ Total cash invested × 100. Best for leveraged investments.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">Typical UK Yields</p>
                    <p className="text-sm text-muted-foreground">Average gross yields range from 4-8% depending on location and property type.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <AlertCircle className="h-5 w-5 text-primary" />
                Common Running Costs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Include these costs when calculating your net yield:
              </p>
              <div className="overflow-hidden rounded-lg border border-border/50">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium">Cost Type</th>
                      <th className="px-4 py-2 text-right font-medium">Typical Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <tr>
                      <td className="px-4 py-2">Letting Agent Fees</td>
                      <td className="px-4 py-2 text-right font-mono">8-12% of rent</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Landlord Insurance</td>
                      <td className="px-4 py-2 text-right font-mono">£150-400/year</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Maintenance Reserve</td>
                      <td className="px-4 py-2 text-right font-mono">1% of value/year</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Service Charge (flats)</td>
                      <td className="px-4 py-2 text-right font-mono">£1,000-3,000/year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Info className="h-5 w-5 text-primary" />
                Top Tips for Maximising Rental Yield
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">Research Local Rents</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Check Rightmove and Zoopla for comparable rental properties to ensure realistic projections.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">Consider Location Carefully</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Northern cities often offer higher yields, while London provides capital growth potential.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">Factor in Void Periods</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Allow 2-4 weeks per year for tenant changeovers to avoid overestimating income.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">Don't Ignore Tax</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Remember income tax on rental profits and changes to mortgage interest relief.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">HMO for Higher Yields</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Houses of Multiple Occupation can achieve yields of 10%+ but require more management.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">Balance Yield vs Growth</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    High-yield areas may have lower capital appreciation—consider your investment goals.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
