import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header/Header';

function App() {
  return (
    <Router basename='/vite-react-ts-boilerplate/'>
      <div className='min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark'>
        <div className='mb-10'>
          <Header />
        </div>

        <div className='container mx-auto p-6'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
