import { useParams } from "react-router-dom";

export default function BlogDetailPage() {
  const { id } = useParams();

  return (
    <div className="w-full">
      <div className="p-6 text-center">Blog Detail: {id}</div>
    </div>
  );
}
