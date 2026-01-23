import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PageContent from "./layout/PageContent";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <BrowserRouter>
      <PageContent>
        <AppRouter />
      </PageContent>
    </BrowserRouter>
  );
}
