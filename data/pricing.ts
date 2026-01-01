import { IPricing } from "@/types";

export const pricingData: IPricing[] = [
  {
    name: "Starter",
    price: 29,
    period: "month",
    features: [
      "50 AI Thumbnails",
      "Best for starters",
      "Access to all AI models",
      "No watermark on downloads",
      "High-quality",
      "Commercial usage allowed",
      "Credits never expire",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    price: 79,
    period: "month",
    features: [
      "240 AI Thumbnails",
      "Best for intermediate",
      "Access to all AI models",
      "No watermark on downloads",
      "High-quality",
      "Commercial usage allowed",
      "Credits never expire",
    ],
    mostPopular: true,
  },
  {
    name: "Ultra",
    price: 199,
    period: "month",
    features: [
      "800 AI Thumbnails",
      "Best for professionals",
      "Access to all AI models",
      "No watermark on downloads",
      "High-quality",
      "Commercial usage allowed",
      "Credits never expire",
    ],
    mostPopular: false,
  },
];
