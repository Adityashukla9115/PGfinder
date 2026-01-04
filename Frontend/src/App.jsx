import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PGDetail from "./pages/PGDetail";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pgs/:id" element={<PGDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Layout>
  );
}

export default App;

