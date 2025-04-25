import React from "react";
import { AppProvider, Frame } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import enTranslations from "@shopify/polaris/locales/en.json";
import RealReviewComponent from "./components/RealReviewComponent";
import GenerateReviewComponent from "./components/GenerateReviewComponent";
import Dashboard from "./pages/Dashboard";
import RepliBot from "./pages/RepliBot";
import RealReview from "./pages/RealReview";

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Router>
        <Frame>
          <Routes>
            <Route path="/" element={<Navigate to="/republic" replace />} />
            <Route path="/republic" element={<RepliBot />} />
            <Route path="/realreview" element={<RealReview />}>
              <Route path=":id" element={<RealReviewComponent />} />
              <Route path=":id/:name" element={<GenerateReviewComponent />} />
            </Route>
          </Routes>
        </Frame>
      </Router>
    </AppProvider>
  );
}

export default App;
