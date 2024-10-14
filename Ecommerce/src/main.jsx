import ReactDOM from 'react-dom/client';

import "./index.css";
import App from "./App";
import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";
ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
  <CartProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </CartProvider>
</SidebarProvider>
   
)
