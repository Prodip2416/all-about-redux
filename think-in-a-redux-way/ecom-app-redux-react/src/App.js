import "./styles/output.css";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductInput from "./components/ProductInput";
import Cart from "./components/Cart";

function App() {
  const menuState = useSelector((state) => state.menu);
  return (
    <div>
      <Navbar />
      <main class="py-16">
        {menuState?.menu === "home" ? (
          <div class="productWrapper">
            <Product />
            <div>
              <ProductInput />
            </div>
          </div>
        ) : (
          <Cart />
        )}
      </main>
    </div>
  );
}

export default App;
