import { Shield, Lock, Server } from "lucide-react";

const badges = [
  {
    icon: Shield,
    label: "GDPR Compliant",
    color: "text-green-500",
  },
  {
    icon: Lock,
    label: "256-bit Encryption",
    color: "text-blue-500",
  },
  {
    icon: Server,
    label: "EU Data Centers",
    color: "text-purple-500",
  },
];

const TrustedSecure = () => {
  return (
    <section id="trusted" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
          Trusted & Secure
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex items-center gap-3">
                <Icon className={`w-6 h-6 ${badge.color}`} />
                <span className="text-muted-foreground font-medium">
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedSecure;
