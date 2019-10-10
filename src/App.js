import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import AddProducts from "./components/AddProducts";
import Products from "./components/Products";
import Product from "./components/Product";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [reloadQuery, setReloadQuery] = useState(true);

  useEffect(() => {



    if (reloadQuery) {
      const queryToApi = async () => {
        const response = await axios.get(`http://localhost:4000/restaurant`);

        setProducts(response.data);
        console.log(response.data);
      };
      queryToApi();
      setReloadQuery(false);
    }
  }, [reloadQuery]);

  return (
    <Router>
      <Header />
      <main className="containers mt-5">
        <Switch>
          <Route
            exact
            path="/add"
            render={() => (<AddProducts setReloadQuery={setReloadQuery} />)}
          />
          <Route
            exact
            path="/products"
            render={() => <Products products={products} />}
          />
          <Route exact path="/product/:id" render={() => <Product />} />
          <Route exact path="/products/edit/:id" component={AddProducts} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
