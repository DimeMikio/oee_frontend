import './style.css';
import '../Global/button/style.css';
import '../Global/form/style.css';
import '../Global/list/style.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from '../Header';
import { Menu } from '../Menu';
import { DashboardOEE } from '../../components/OEE';
import { Config } from '../../components/Config';
import { Register } from '../../components/Register';
import { CapacityEquipment } from '../../components/CapacityEquipment';
import { InputControl } from '../../components/InputControl';


function Home() {

  return (
    <div className="app">
      <BrowserRouter>
        <Menu />
        <div className='header'><Header /></div>
        <div className='main'>
          <Routes>
            <Route path='/' element={<DashboardOEE />} />
            <Route path='/config' element={<Config />} />
            <Route path='/register' element={<Register />} />
            <Route path='/capacity-equipment' element={<CapacityEquipment />} />
            <Route path='/input-control' element={<InputControl />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Home;
