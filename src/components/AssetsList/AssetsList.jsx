import { AssetCard } from "../AssetCard/AssetCard";

export const AssetsList = ({assets}) => {
  
  return (
    <section className="section">
      {assets.map((asset) => (
        <AssetCard key={asset.IDActivo} asset={{ ...asset }} />
      ))}
    </section>
  );
};
