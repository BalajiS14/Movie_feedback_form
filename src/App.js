import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import FeedbackForm from "./components/Feedbackform";
import ReviewList from "./components/ReviewList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>🎬 Movie Feedback App</h1>

        <nav className="nav tabs">
          <Link className="tab-link" to="/feedback">Give Feedback</Link>
          <Link className="tab-link" to="/reviews">View Reviews</Link>
        </nav>

        <div className="route-box"> {/* Box added here */}
          <Routes>
            <Route path="/" element={<Navigate to="/feedback" />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/reviews" element={<ReviewList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
