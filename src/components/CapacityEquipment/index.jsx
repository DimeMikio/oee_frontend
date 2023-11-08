import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

export const CapacityEquipment = () => {
  return (
    <div className='dashboard-container'>
      <div className='header-container'>
        <p>Programação de Produção</p>
      </div>

      <div className='body-container'>

        <div className='list-product-container'>
          <div className='list-product-header'>
            <div className='list-product-header-equip'>
              <p>HMC 01 - Heller</p>
            </div>

            <div className='list-product-header-buttons'>
              <div><FontAwesomeIcon icon={faPlusCircle} /></div>
              <div><FontAwesomeIcon icon={faMinusCircle} /></div>
            </div>
          </div>

          <div className='list-product-body'>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Descrição</th>
                  <th>Op</th>
                  <th>Qntd</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>111.111.111</td>
                  <td>Polia</td>
                  <td>10</td>
                  <td>130</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}