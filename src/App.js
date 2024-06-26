import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRouter from "./AppRouter";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <ToastContainer />
    </div>
  );
}

export default App;
