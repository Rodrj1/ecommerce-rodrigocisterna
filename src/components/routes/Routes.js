import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ItemListContainer from "../Items/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../Items/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "../Cart/Cart";
import { OrderList } from "../OrderList/OrderList";

const Routes = () => {

  return (
    <BrowserRouter>

      <NavBar />

      <Switch>
        <Route path="*" element={<h1>Path does not exist</h1>} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<OrderList />} />
      </Switch>
      
    </BrowserRouter>
  );
};

export default Routes;
