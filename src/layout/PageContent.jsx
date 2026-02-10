import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FlashBanner from "./FlashBanner";

export default function PageContent({ children }) {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Flash message – route değişince remount */}
      <FlashBanner key={location.key} />

      <main className="flex flex-1 flex-col">{children}</main>

      <Footer />
    </div>
  );
}
