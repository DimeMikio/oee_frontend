import './style.css';

export const InputControl = () => {
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

        </div>
      </div>
    </div>
  )
}