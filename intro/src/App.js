import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './components/Add';
import Header from './components/Header';
import Watched from './components/Watched';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/Add' element={<Add />} />
        <Route path='/Watched' element={<Watched />} />
        <Route path='/Watchlist' element={<Watchlist />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
