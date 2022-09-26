import { Routes, Route } from "react-router-dom"
import { Homepage, AddProject } from './pages';
import { Navigation } from "./components"
import "./App.css"

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/add-project" element={<AddProject/>} />
      </Routes>
    </div>
  );
}

export default App;
