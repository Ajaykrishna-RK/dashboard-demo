
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './views/dashboard/Dashboard';
import Orders from './views/orders/Orders';
import Products from './views/products/Products';

function App() {
  return (
    <div >
     <Sidebar/>
     <div className='App'>
     <Routes>
     <Route path="/orders" element={<Orders/>}/>
     <Route path="/products" element={<Products />}/>
      <Route path="/" element={<Dashboard/>}/>

     </Routes>
     </div>
     
    </div>
  );
}

export default App;
