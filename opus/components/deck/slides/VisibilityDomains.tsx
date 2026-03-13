import { Slide } from "@/components/deck/Slide";
import { SlideTitle } from "@/components/deck/layouts";
import { DomainCard } from "@/components/deck/blocks";
import { BarChart3, Landmark, TrendingUp, Layers, Users } from "lucide-react";

const domains = [
  {
    icon: BarChart3,
    title: "DEX Liquidity & Pricing (CLMMs)",
    description:
      "Liquidity structure across price ranges and price impact around the current price.",
  },
  {
    icon: Landmark,
    title: "Lending & Collateral Risk (e.g., Kamino)",
    description:
      "Utilisation, liquidation conditions, and collateral concentration dynamics.",
  },
  {
    icon: TrendingUp,
    title: "Yield / Structured Exposure (e.g., Exponent)",
    description: "Vault state, rate dynamics, and position behaviour.",
  },
  {
    icon: Layers,
    title: "Cross-Protocol Stress Signals",
    description:
      "Dependencies and stress propagation across venues and protocols.",
  },
  {
    icon: Users,
    title: "Partner Oversight (Market Makers / LPs)",
    description:
      "Independent evaluation of depth provision and behaviour during volatility.",
  },
];

export function VisibilityDomains() {
  return (
    <Slide>
      <SlideTitle title="Where Visibility Is Required" />
      <div className="relative z-0 flex-1">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(56, 130, 200, 0.05) 0%, transparent 65%)",
          }}
        />
        <div className="grid grid-cols-3 gap-6">
          {domains.slice(0, 3).map((d) => (
            <DomainCard key={d.title} icon={d.icon} title={d.title} description={d.description} />
          ))}
        </div>
        <div className="mx-auto mt-6 grid max-w-[1120px] grid-cols-2 gap-6">
          {domains.slice(3).map((d) => (
            <DomainCard key={d.title} icon={d.icon} title={d.title} description={d.description} />
          ))}
        </div>
      </div>
      <p className="mt-8 text-base italic text-muted-foreground/50">
        Turnkey coverage today: Solana DEX + Kamino + Exponent. Extendable to
        additional Solana/EVM protocols as required.
      </p>
    </Slide>
  );
}
