import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import store from './redux/store';
import ProductList from './components/ProductList';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <header>
                        <Link to="/">Products</Link>
                        <CartIcon />
                    </header>
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/product/:id" element={<SingleProduct />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

function CartIcon() {
    const cart = useSelector(state => state.cart.cart);

    return (
        <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={24} />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
    );
}

export default App;