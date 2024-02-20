import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CoffeePage from './CoffeePage';
import AboutUs from './AboutUs';
import Cart from './Cart';

import { CartProvider } from './CartContext';

function App() {

  const [cartOpen, setCartOpen] = useState(true);
  const [data, setData] = useState([])



  useEffect(() => { 
    async function fetchData() {
      try {
          const response = await fetch('https://fake-coffee-api.vercel.app/api?limit=20 ', {
              
          });
          const data = await response.json();
          
          setData(data);
      } catch (error) {
          console.error("Error fetching data: ", error);
      }
      
  }
  fetchData()
  }, [])
console.log(data)



  return (
    <Router>
      <CartProvider>
        <div>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<CoffeePage data={data} />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/cart" element={<Cart isOpen={cartOpen} toggleKosik={() => setCartOpen(!cartOpen)} />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;