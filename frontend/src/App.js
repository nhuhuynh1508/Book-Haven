import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import ShoppingCart from './pages/shoppingCart';

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
