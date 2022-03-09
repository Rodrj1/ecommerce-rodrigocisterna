import "./App.css";
import Routes from "./components/routes/Routes";
import { CartProvider } from "./context/CartContext";

function App() {

  return (
    <div className="App">
      <CartProvider>
        <Routes />
      </CartProvider>
    </div>
  );
}

export default App;
