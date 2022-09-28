import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import FeedbackState from "./components/FeedbackState";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";

// Context
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <FeedbackForm />
                  <FeedbackState />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
