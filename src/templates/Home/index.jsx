import './style.css';
import './css/button/style.css';
import './css/form/style.css';
import './css/list/style.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Dashboard } from '../../components/Dashboard';
import { Config } from '../../components/Config';
import { Register } from '../../components/Register';


function Home() {

  return (
    <div className="app">
      <BrowserRouter>
        <Menu />
        {/* <div className='header'><Header /></div>
        <div className='main'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/config' element={<Config />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div> */}
      </BrowserRouter>
    </div>
  );
}

export default Home;
