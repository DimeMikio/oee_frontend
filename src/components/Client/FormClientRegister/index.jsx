import { useState } from "react";

export const ClientRegister = ({closeForm, infoClient}) => {
  const { action, id, client } = infoClient;
  const [cli, setCli] = useState({id, client});

  const handleInput = (e, field) => {
    switch(field) {
      case 'type':
        setCli({...cli, client: e.target.value})
        break;
      default:
        setCli({...cli});
    }

  }

  return (
    <div className="bkg-form">
      <div className="container-form">

        <div className="header-form">
          <div className="header-form-text">
            <p>Gerenciar Cliente</p>
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
                <input type="text" required='required' value={cli.client} onChange={(e) => handleInput(e, 'type')} />
                <span>Cliente</span>
                <i></i>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}