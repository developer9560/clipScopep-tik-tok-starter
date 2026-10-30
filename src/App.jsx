import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<main className="mx-auto max-w-4xl px-5 py-24"><h1 className="text-3xl font-bold">Page not found</h1><a className="mt-5 inline-block text-teal-300" href="/">Return home →</a></main>} />
      </Routes>
      <Footer />
    </div>
  );
}
