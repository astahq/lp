import { Home, Building2, FileText } from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "Residential Conveyancing",
    description:
      "Streamline house purchases and sales with automated document analysis",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Building2,
    title: "Commercial Property",
    description:
      "Handle complex commercial transactions with AI-powered analysis",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
  },
  {
    icon: FileText,
    title: "Lease Reviews",
    description:
      "Quickly analyse lease terms and conditions with intelligent extraction",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
];

const UseCases = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="bg-muted/30 rounded-2xl border border-border p-10 md:p-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-12">
            Perfect for Every Property Transaction
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="text-center">
                  <div
                    className={`w-14 h-14 rounded-full ${useCase.bgColor} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={`w-7 h-7 ${useCase.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {useCase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
