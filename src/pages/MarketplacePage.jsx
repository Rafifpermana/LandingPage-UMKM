import React from "react";
import MarketplaceHero from "../components/MarketplaceComponents/MarketplaceHero";
import ProductGrid from "../components/MarketplaceComponents/ProductGrid";
import JoinCTA from "../components/MarketplaceComponents/JoinCTA";

export default function MarketplacePage() {
  return (
    <div className="bg-gray-50">
      <MarketplaceHero />
      <ProductGrid />
      <JoinCTA />
    </div>
  );
}
