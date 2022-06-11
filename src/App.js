import { Route } from "react-router";
import { Routes } from "react-router";
import "./App.css";
import Home from "./Pages/Home/Home";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import NotFound from "./Pages/SharedPages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/projects/:projectId"
          element={<ProjectDetails></ProjectDetails>}
        />

        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
