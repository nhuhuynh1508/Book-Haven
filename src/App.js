import './App.css';
import Gallery from './components/gallery';
import Header from './components/header';
import Title from './components/title';

function App() {
  return (
    <div className="bg-white min-h-screen">
        <Header />
        <Title />
        <Gallery />
    </div>
  );
}

export default App;
