import { useParams } from "react-router-dom";
import { products } from "../components/data/productsData.jsx";
import ProductDetailCard from "../components/cards/ProductDetailCard.jsx";
import ProductDescriptionSection from "../components/sections/ProductDetailDescriptionSection.jsx";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) return <div className="p-10">Product not found</div>;

  return (
    <div className="w-full">
      <ProductDetailCard
        id={product.id}
        image={product.image}
        title={product.title}
        category={product.category}
        oldPrice={product.oldPrice}
        newPrice={product.price}
        availability={product.availability}
        description={product.description}
      />
      <ProductDescriptionSection
        image={product.image}
        title={product.title}
        description={product.description}
      />
    </div>
  );
}
