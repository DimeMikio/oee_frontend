import { useState } from "react";

export const StopRegister = ({closeForm, infoStop}) => {
  const { action, id, stop } = infoStop;
  const [stops, setStops] = useState({id, stop});

  const handleInput = (e, field) => {
    switch(field) {
      case 'stop':
        setStops({...stop, stop: e.target.value})
        break;
      default:
        setStops({...stop});
    }

  }

  return (
    <div className="bkg-form">
      <div className="container-form">

        <div className="header-form">
          <div className="header-form-text">
            <p>Gerenciar Paradas</p>
          </div>

          <div className="header-form-btn">
            {action === 'edit' ? <button className="btn btn-blue">Salvar</button> : <button className="btn btn-green">Salvar</button>}
            <button className="btn btn-gray" onClick={() => closeForm()}>Cancelar</button>
          </div>
        </div>

        <div className="body-form">
          <div className="body-form-input">
            <form>
              
              <div className="inputBox">
                <input type="text" required='required' value={stops.stop} onChange={(e) => handleInput(e, 'equip')} />
                <span>Paradas</span>
                <i></i>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}