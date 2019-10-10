import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import AddProducts from './components/AddProducts';
import Products from './components/Products';
import Product from './components/Product';
import Header from './components/Header';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const url =`http://localhost:4000/restaurant`
    axios.get(url).then(response => {
      setProducts(response.data)
    });

  },[])

  return (
    <Router>
      <Header />
      <main className='containers mt-5'>
        <Switch>
          <Route exact path='/add' render={() => (<AddProducts />)} />
          <Route exact path='/products' render={() => (<Products products={products} />)} />
          <Route exact path='/product/:id' render={() => (<Product/>)} />
          <Route exact path='/products/edit/:id' component={AddProducts} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
