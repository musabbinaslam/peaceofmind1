import { BrowserRouter as Router, Routes, Route } from "react-router";
import { LanguageProvider } from "@/react-app/contexts/LanguageContext";
import HomePage from "@/react-app/pages/Home";
import TermsPage from "@/react-app/pages/Terms";
import PrivacyPage from "@/react-app/pages/Privacy";

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
