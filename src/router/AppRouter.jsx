import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import BlogPage from "../pages/BlogPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import BlogDetailPage from "../pages/BlogDetailPage";
import ContactPage from "../pages/ContactPage";

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/blog" component={BlogPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/product/:id" component={ProductDetailPage} />
      <Route exact path="/blog/:id" component={BlogDetailPage} />

      <Route render={() => <div className="p-6 text-center">404</div>} />
    </Switch>
  );
}
