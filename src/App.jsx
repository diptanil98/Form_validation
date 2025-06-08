import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./form";
import Details from "./details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
