import { useState } from 'react';
import './style.css';

export const InputControl = () => {
  const [showOptProd, setShowOptProd] = useState(false)
  const [showAddProd, setShowAddProd] = useState(false)

  //component and functions of OptionsProduct
  //This block is called when the product is in production and you need stop or pause the production
  const OptionsProduct = () => {
    return (
      <div className='inputcontrol-container'>
        <div className='optionProd-bkg'>
          <button className='btn-gray'>parar produto</button>
          <button className='btn-gray'>finalizar produto</button>
          <button className='btn-nok' onClick={() => setShowOptProd(false)}>cancelar</button>
        </div>
      </div>
    )
  }

  //component and function of AddProduct
  //Thus block is called when the you need to add a new product
  const AddProduct = () => {
    return (
      <div className='inputcontrol-container'>
        <div className='addProd-bkg'>
          <button className='btn-gray'>começar produção</button>
          <button className='btn-nok' onClick={() => setShowAddProd(false)}>cancelar</button>
        </div>
      </div>
    )
  }

  return (
    <div className='inputcontrol-container'>
      <div className='inputcontrol-bkg'>
        <div className='inputcontrol-painel'>
          
          <div className='inputcontrol-header'>
            <p className='header-identy'>hmc01</p>
            <p className='header-equip'>heller</p>
          </div>

          <div className='inputcontrol-index'>
            <div className='index-oee'>
              <span className='index-oee-circle circle-grn'>
                <p className='index-value-oee'>87%</p>
                <p className='index-value-type'>OEE</p>
              </span>
            </div>

            <div className='index-others'>
              <div className='index-sub'>
                <p className='font-red'>52%</p>
                <p>Efic</p>
              </div>

              <div className='index-sub'>
                <p className='font-ylw'>72%</p>
                <p>Disp</p>
              </div>

              <div className='index-sub'>
                <p className='font-grn'>100%</p>
                <p>Qual</p>
              </div>
            </div>
          </div>

          <div className='inputcontrol-infos'>
            <div>
              <p>Operador</p>
              <p>dime mikio hosokawa</p>
            </div>

            <div>
              <p>Turno</p>
              <p>2</p>
            </div>
          </div>

          <div className='inputcontrol-products'>
            <table>
              <thead>
                <tr>
                  <th>produção</th>
                  <th>meta</th>
                  <th>real</th>
                  <th>aprovado</th>
                  <th>reprovado</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className='prod_inputctrl' onClick={() => setShowOptProd(true)}><p>836.733.025</p><p>10/20</p></td>
                  <td className='goal_inputctrl'>69</td>
                  <td className='real_inputctrl font-grn'>68</td>
                  <td><button className='btn-inputctrl btn-ok'>OK</button></td>
                  <td><button className='btn-inputctrl btn-nok'>NOK</button></td>
                </tr>
                <tr>
                  <td className='prod_inputctrl' onClick={() => setShowAddProd(true)}><p>836.733.025</p><p>10/20</p></td>
                  <td className='goal_inputctrl'>69</td>
                  <td className='real_inputctrl font-grn'>68</td>
                  <td><button className='btn-inputctrl btn-ok'>OK</button></td>
                  <td><button className='btn-inputctrl btn-nok'>NOK</button></td>
                </tr>
              </tbody>
            </table>

            <div className='btn_inputctrl'>
              <button className='btn_add_prod'>+</button>
            </div>
          </div>

          <div className='inputcontrol_stops'>
            <div className='header_stops_inputctrl'>paradas</div>

            <div className='container_stops_inputctrl'>
              <button>troca de ferramenta</button>
              <button>setup</button>
              <button>correção / liberação</button>
              <button>manutenção preventiva</button>
              <button>manutenção corretiva</button>
              <button>desenvolvimento</button>
              <button>reunião</button>
              <button>falta matéria prima</button>
            </div>
          </div>

          { showOptProd && <OptionsProduct /> }
          { showAddProd && <AddProduct /> }

        </div>
      </div>
    </div>
  )
}