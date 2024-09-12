import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <Router>
        <Layout>
        <div className="pl-[280px] bg-[#000000]">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          </div>
        </Layout>
    </Router>
  );
}

export default App;
