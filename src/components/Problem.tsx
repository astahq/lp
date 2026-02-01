import { Clock, PoundSterling, Users, AlertCircle } from "lucide-react";
const painPoints = [
  {
    icon: Clock,
    text: "3-4 hours per legal pack review",
  },
  {
    icon: PoundSterling,
    text: "£80-120 in billable time lost on admin",
  },
  {
    icon: Users,
    text: "Junior solicitors tied up in repetitive work",
  },
  {
    icon: AlertCircle,
    text: "Risk of human error on critical details",
  },
];
const Problem = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            Property Solicitors Spend Too Much Time on Manual Document Review!
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 rounded-xl bg-muted/50 border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <p className="text-foreground font-medium">{point.text}</p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-xl text-primary font-semibold">
            There's a better way.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Problem;
