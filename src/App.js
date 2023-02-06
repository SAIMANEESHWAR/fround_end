import React from 'react';
import {Routes,Route} from 'react-router-dom';



import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Header1 from './pages/Header1';
import Body from './pages/Body';
import Footer from './pages/footer';
import AboutUs from './components/table';

function App() {
  return (
   
    
   <Routes>

    <Route path='/' element={<><Header1/><Body/><Footer/></>}></Route>
    <Route path='/dash' element={<Dashboard/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/assignhent1' element={<AboutUs/>}></Route>
   </Routes>
    
      
     
    
  );
}

export default App;

