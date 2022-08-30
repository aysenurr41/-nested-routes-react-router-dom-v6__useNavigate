
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Search from './components/products/Search';
import Login from './components/Login';
import Product from './components/products/Product';
import AddProduct from './components/products/AddProduct';
import ListProducts from './components/products/ListProducts';
import ProductDisplay from './components/products/ProductDisplay';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="login">Login</Link>
        <Link to="/products/search">Products</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='products' element={<Product />} >
          <Route path='list' element={<ListProducts />} />
          <Route path='search' element={<Search />} />
          <Route path='add' element={<AddProduct />} />
          <Route path=':id' element={<ProductDisplay />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
