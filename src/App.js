import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Review from './components/Review/Review';
import Shop from './components/Shop/shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Header />
      <Router>
        {/* <Switch> */}
        <Routes>
          <Route path='/shop' element={<Shop />}>
            {/* <Shop></Shop> */}
          </Route>
          <Route path='/review' element={<Review />}>
            {/* <Review></Review> */}
          </Route>
          <Route path='/manage' element={<Inventory />}>
          </Route>
          <Route exact path='/' element={<Shop />}>
          </Route>
          <Route path='/product/:productKey' element={<ProductDetail />}>
          </Route>
          <Route path='*' element={<NotFound />}>
          </Route>
        </Routes>
        {/* </Switch> */}
      </Router>


    </div>
  );
}

export default App;
