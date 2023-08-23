import './style.css';

import { useState } from 'react';

import { User } from '../User';
import { Operator } from '../Operator';
import { Equipment } from '../Equipment';
import { Product } from '../Product';
import { Client } from '../Client';
import { Stop } from '../Stop';

export const Register = () => {
  const [itemSelect, setItemSelect] = useState(1);

  return (
    <div className='container-register'>

      <div className='container-register-menu'>
        <div className='header-register-menu'>
          <p>Cadastro</p>
        </div>

        <div className='menu-register'>
          <ul>
            <li className={itemSelect === 1 ? 'item-menu-active' : 'item-menu-disabled'} onClick={() => setItemSelect(1)}>Usuários</li>
            <li className={itemSelect === 2 ? 'item-menu-active' : 'item-menu-disabled'} onClick={() => setItemSelect(2)}>Operadores</li>
            <li className={itemSelect === 3 ? 'item-menu-active' : 'item-menu-disabled'} onClick={() => setItemSelect(3)}>Equipamento</li>
            <li className={itemSelect === 4 ? 'item-menu-active' : 'item-menu-disabled'} onClick={() => setItemSelect(4)}>Produtos</li>
            <li className={itemSelect === 5 ? 'item-menu-active' : 'item-menu-disabled'} onClick={() => setItemSelect(5)}>Clientes</li>
            <li className={itemSelect === 6 ? 'item-menu-active' : 'item-menu-disabled'} onClick={() => setItemSelect(6)}>Tipos Paradas</li>
          </ul>
        </div>

        <div className='register-menu-footer'></div>
      </div>

      <div className='container-register-body'>
        {itemSelect === 1 && <User />}
        {itemSelect === 2 && <Operator />}
        {itemSelect === 3 && <Equipment />}
        {itemSelect === 4 && <Product />}
        {itemSelect === 5 && <Client />}
        {itemSelect === 6 && <Stop />}
      </div>
    </div>
  )
}