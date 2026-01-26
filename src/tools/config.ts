import { Calculator, TrendingUp, Ruler, Receipt, LucideIcon } from "lucide-react";
import MortgageCalculatorTool from "./mortgage-calculator";
import RentalYieldCalculatorTool from "./rental-yield-calculator";
import PropertyAreaCalculatorTool from "./property-area-calculator";
import StampDutyCalculatorTool from "./stamp-duty-calculator";

export interface ToolConfig {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  category?: string;
  component: React.ComponentType;
}

export const tools: ToolConfig[] = [
  {
    id: "mortgage-calculator",
    slug: "mortgage-calculator",
    name: "Mortgage Calculator",
    description: "Calculate buy-to-let mortgage payments, stamp duty, and total costs",
    icon: Calculator,
    component: MortgageCalculatorTool,
  },
  {
    id: "rental-yield-calculator",
    slug: "rental-yield-calculator",
    name: "Rental Yield Calculator",
    description: "Calculate gross yield, net yield, and cash-on-cash returns for UK properties",
    icon: TrendingUp,
    component: RentalYieldCalculatorTool,
  },
  {
    id: "property-area-calculator",
    slug: "property-area-calculator",
    name: "Property Area Calculator",
    description: "Calculate total floor area in square metres and square feet for UK properties",
    icon: Ruler,
    component: PropertyAreaCalculatorTool,
  },
  {
    id: "stamp-duty-calculator",
    slug: "stamp-duty-calculator",
    name: "Stamp Duty Calculator",
    description: "Calculate UK stamp duty, LBTT, and LTT for all buyer types and regions",
    icon: Receipt,
    component: StampDutyCalculatorTool,
  },
];

export const getToolBySlug = (slug: string): ToolConfig | undefined => {
  return tools.find((tool) => tool.slug === slug);
};

export const getAllTools = (): ToolConfig[] => {
  return tools;
};
