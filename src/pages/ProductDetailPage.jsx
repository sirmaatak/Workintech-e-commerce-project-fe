import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();

  return (
    <div className="w-full">
      <div className="p-6 text-center">Product Detail: {id}</div>
    </div>
  );
}
