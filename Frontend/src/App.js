import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

        <Route element={<PrivateComponent />}>
        <Route path='/' element={<h1>Product Listing Component</h1>} />
        <Route path='/add' element={<h1>Add Listing Component</h1>}/>
        <Route path='/update' element={<h1>update Listing Component</h1>}/>
        <Route path='/profile' element={<h1>profile Listing Component</h1>}/>
        <Route path='/logout' element={<h1>Logout Component</h1>}/>
        </Route>

        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
