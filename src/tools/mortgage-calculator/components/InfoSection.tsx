import { CheckCircle, AlertCircle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InfoSection = () => {
  return (
    <section id="info" className="py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Understanding UK Buy-to-Let Mortgages
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Essential information for property investors navigating the UK mortgage market.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <CheckCircle className="h-5 w-5 text-primary" />
                Buy-to-Let Mortgage Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">Minimum 25% Deposit</p>
                    <p className="text-sm text-muted-foreground">Most lenders require at least 25% deposit for buy-to-let properties</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">Rental Income Assessment</p>
                    <p className="text-sm text-muted-foreground">Expected rent must typically cover 125-145% of mortgage payments</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">Minimum Income</p>
                    <p className="text-sm text-muted-foreground">Many lenders require minimum personal income of £25,000+</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">Property Ownership</p>
                    <p className="text-sm text-muted-foreground">Usually must own your own home or have owned property before</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <AlertCircle className="h-5 w-5 text-primary" />
                Additional Property Stamp Duty
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                When purchasing an additional property in England or Northern Ireland, you pay a 5% surcharge on top of standard rates:
              </p>
              <div className="overflow-hidden rounded-lg border border-border/50">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium">Property Value</th>
                      <th className="px-4 py-2 text-right font-medium">Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <tr>
                      <td className="px-4 py-2">Up to £250,000</td>
                      <td className="px-4 py-2 text-right font-mono">5%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">£250,001 - £925,000</td>
                      <td className="px-4 py-2 text-right font-mono">10%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">£925,001 - £1,500,000</td>
                      <td className="px-4 py-2 text-right font-mono">15%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Over £1,500,000</td>
                      <td className="px-4 py-2 text-right font-mono">17%</td>
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
                Top Tips for Property Investors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">Research the Area</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Look at local rental yields, tenant demand, and property price trends before investing.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">Factor in All Costs</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Remember maintenance, insurance, letting agent fees, void periods, and tax obligations.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">Compare Mortgage Deals</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    BTL rates vary significantly between lenders. Consider using a specialist broker.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">Understand Tax Changes</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Mortgage interest relief changes mean tax planning is crucial for landlords.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">Consider Limited Company</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Purchasing through a limited company may offer tax advantages for some investors.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">Plan for Regulations</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Stay updated on EPC requirements, licensing, and tenant protection laws.
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
