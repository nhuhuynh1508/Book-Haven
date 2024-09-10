import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home/home';
import ShoppingCart from './shoppingCart/shoppingCart';

const App = () => {
    
    return (
        <div className="bg-white min-h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/shoppingCart" element={<ShoppingCart />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
