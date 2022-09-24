import { Routes, Route } from "react-router-dom"
import { Homepage } from './pages';
import { Navigation } from "./components"

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </div>
  );
}

export default App;
