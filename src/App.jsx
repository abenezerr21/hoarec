import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
        </Routes>
    );
};

export default App;
