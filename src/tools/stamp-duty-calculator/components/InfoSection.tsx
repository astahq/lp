import { CheckCircle, AlertCircle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InfoSection = () => {
  return (
    <section id="info" className="py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Understanding UK Stamp Duty
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Essential information about stamp duty and property transaction taxes across the UK.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <CheckCircle className="h-5 w-5 text-primary" />
                England & Northern Ireland Rates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Standard Stamp Duty Land Tax (SDLT) rates for residential properties:
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
                      <td className="px-4 py-2 text-right font-mono">0%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">£250,001 - £925,000</td>
                      <td className="px-4 py-2 text-right font-mono">5%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">£925,001 - £1,500,000</td>
                      <td className="px-4 py-2 text-right font-mono">10%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Over £1,500,000</td>
                      <td className="px-4 py-2 text-right font-mono">12%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <AlertCircle className="h-5 w-5 text-primary" />
                First-Time Buyer Relief
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                First-time buyers benefit from reduced stamp duty rates:
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">No stamp duty up to £425,000</p>
                    <p className="text-sm text-muted-foreground">First-time buyers pay nothing on the first £425,000</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">5% on £425,001 to £625,000</p>
                    <p className="text-sm text-muted-foreground">Reduced rate applies to this portion only</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">Properties over £625,000</p>
                    <p className="text-sm text-muted-foreground">Standard rates apply to the entire purchase</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Info className="h-5 w-5 text-primary" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">Additional Property Surcharge</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Buy-to-let and second homes incur a 5% surcharge on top of standard rates from the first pound.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">Scotland (LBTT)</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Scotland uses Land and Buildings Transaction Tax with different thresholds starting at £145,000.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">Wales (LTT)</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Wales uses Land Transaction Tax with thresholds starting at £225,000 for standard purchases.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">When to Pay</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Stamp duty must be paid within 14 days of completion. Your solicitor usually handles this.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">Refunds Available</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    If you sell your previous home within 3 years, you may be able to claim back the additional surcharge.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <p className="font-medium">Company Purchases</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Properties over £500,000 bought by companies may face a 15% rate on the entire value.
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
