import { CheckCircle2, Ruler } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InfoSection = () => {
  return (
    <section id="info" className="py-20">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Ruler className="h-5 w-5 text-primary" />
                How to Measure Your Property
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                Accurate property measurements are essential for valuations, renovations, and sales. 
                Follow these steps to measure your home correctly:
              </p>
              <ul className="space-y-3">
                {[
                  "Measure each room from wall to wall at floor level",
                  "Include all habitable rooms (living areas, bedrooms, kitchens)",
                  "Measure alcoves, bay windows, and built-in wardrobes",
                  "Record dimensions in metres for accuracy",
                  "Don't include garages, outbuildings, or balconies in internal area",
                  "Use a laser measure for the most accurate results",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-xl">
                UK Property Size Standards
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                Understanding property size standards helps you compare homes and assess value:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="pb-3 text-left font-semibold">Property Type</th>
                      <th className="pb-3 text-right font-semibold">Typical Size (m²)</th>
                      <th className="pb-3 text-right font-semibold">Typical Size (sq ft)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    <tr>
                      <td className="py-3">Studio Flat</td>
                      <td className="py-3 text-right font-mono">25-40</td>
                      <td className="py-3 text-right font-mono">270-430</td>
                    </tr>
                    <tr>
                      <td className="py-3">1-Bed Flat</td>
                      <td className="py-3 text-right font-mono">40-55</td>
                      <td className="py-3 text-right font-mono">430-590</td>
                    </tr>
                    <tr>
                      <td className="py-3">2-Bed Flat</td>
                      <td className="py-3 text-right font-mono">55-75</td>
                      <td className="py-3 text-right font-mono">590-810</td>
                    </tr>
                    <tr>
                      <td className="py-3">2-Bed House</td>
                      <td className="py-3 text-right font-mono">70-90</td>
                      <td className="py-3 text-right font-mono">750-970</td>
                    </tr>
                    <tr>
                      <td className="py-3">3-Bed House</td>
                      <td className="py-3 text-right font-mono">85-120</td>
                      <td className="py-3 text-right font-mono">915-1,290</td>
                    </tr>
                    <tr>
                      <td className="py-3">4-Bed House</td>
                      <td className="py-3 text-right font-mono">110-160</td>
                      <td className="py-3 text-right font-mono">1,180-1,720</td>
                    </tr>
                    <tr>
                      <td className="py-3">5+ Bed House</td>
                      <td className="py-3 text-right font-mono">150+</td>
                      <td className="py-3 text-right font-mono">1,615+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Sizes vary by region, age, and style of property. New builds typically meet minimum 
                space standards set by local planning authorities.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-border/50">
          <CardHeader>
            <CardTitle className="text-xl">
              Why Accurate Property Measurements Matter
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="font-semibold text-foreground mb-2">For Buyers</h4>
                <p className="text-sm text-muted-foreground">
                  Compare properties accurately, calculate price per square foot, and ensure 
                  you're getting fair value for your investment. Larger floor areas typically 
                  command higher prices.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">For Sellers</h4>
                <p className="text-sm text-muted-foreground">
                  Accurately measured properties sell faster and for better prices. Estate agents 
                  use floor area to set asking prices and create professional floor plans for listings.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">For Renovations</h4>
                <p className="text-sm text-muted-foreground">
                  Calculate materials needed for flooring, paint, and other finishes. Accurate 
                  measurements help contractors provide precise quotes and avoid costly mistakes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InfoSection;
