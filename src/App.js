import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import VideoPage from "./components/VideoPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/room/:id" element={<VideoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
