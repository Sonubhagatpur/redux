import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import User from './components/pages/User';
// import About from './components/pages/About';
import HomeContainers from './containers/HomeContainers';

function App() {
  return (
    <div>
      <HomeContainers />
    </div>
    // <BrowserRouter basename='/'>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' element={<h2>All Products Details</h2>}></Route>
    //     <Route path='/add' element={<h2>Add Products</h2>}></Route>
    //     <Route path='/update' element={<h2>Update Products Details</h2>}></Route>
    //     <Route path='/profile' element={<h2>This is my profile page</h2>}></Route>
    //     <Route path='/user' element={<User />}></Route>
    //     <Route path='/about' element={<About />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
