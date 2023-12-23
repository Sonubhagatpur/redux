import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Navbar />
      <Routes>
        <Route path='/' element={<h2>All Products Details</h2>}></Route>
        <Route path='/add' element={<h2>Add Products</h2>}></Route>
        <Route path='/update' element={<h2>Update Products Details</h2>}></Route>
        <Route path='/profile' element={<h2>This is my profile page</h2>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
