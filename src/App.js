import "./App.css";
import CreateRoute from "./Routes/CreateRoute";
import NavBar from "./Components/navbar/NavBar";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CreateRoute />
      <Footer />
    </div>
  );
}

export default App;
